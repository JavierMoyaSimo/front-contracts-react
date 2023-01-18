import React, { useState, useEffect } from "react";
// import { NavItem } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import './ContractsTable.scss'
import { useSelector, useDispatch } from "react-redux";
import { contractsTableData } from "./contractsTableSlice";
import { bringContracts, bringContractsById, addContract, deleteContract, modifyContract, bringLocalitiesByCp } from "../../services/apiCalls";
// import axios from 'axios';

const ContractsTable = () => {

    // const dispatch = useDispatch();
    // const selectedContract = useSelector(tableData);

    //Hooks
    const [contracts, setContracts] = useState([]);


    //1º vez componente
    useEffect(() => {


        bringContracts()
            .then((contracts) => {
                console.log(contracts, "estos son los contratos")
                setContracts(contracts);
            })
            .catch((error) => console.error(error));

    }, []);


    // Cada vez que el estado se modifica
    // useEffect(() => {

    //     bringContracts()
    //         .then((contracts) => {
    //             console.log(contracts,"estos son los contratos")
    //             setContracts(contracts);
    //         })
    //         .catch((error) => console.error(error));

    // }, [contracts]);


    if (contracts.length === 0) { return <div className="tablewithoutcontracts"></div>; }
    else if (contracts.length > 0) {
        return (
            <div className='container'>
                <div className="new-contract-button">
                    <div className="left-new-contract-button">+</div>
                    <div className="right-new-contract-button">Nuevo</div>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th> Documento</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {contracts.map((contract, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {contract._id}
                                    </td>
                                    <td>
                                        {contract.nombre}
                                    </td>
                                    <td>
                                        {contract.documento}
                                    </td>
                                    <td className="buttons-div">
                                        <div className="modify-button" >
                                            <div className="left-modify-button">a</div>
                                            <div className="right-modify-button">Editar</div>
                                        </div>
                                        <div className="delete-button" >
                                            <div className="left-delete-button">b</div>
                                            <div className="right-delete-button">Borrar</div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </Table>

            </div>
        )
    }


}

export default ContractsTable;