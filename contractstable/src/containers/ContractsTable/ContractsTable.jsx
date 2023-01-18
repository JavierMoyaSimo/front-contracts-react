import React, { useState, useEffect } from "react";
// import { NavItem } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import './ContractsTable.scss'
import { useSelector, useDispatch } from "react-redux";
import { contractsTableData, addContractTable } from "./contractsTableSlice";
import { useNavigate } from 'react-router-dom';
import { bringContracts, bringContractsById, addContract, deleteContract, modifyContract, bringLocalitiesByCp } from "../../services/apiCalls";
import axios from "axios";


const ContractsTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


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





    const clickedModify = (contract) => {


        dispatch(addContractTable({ ...contract, details: contract }));
        console.log(contract, "estos son los contracts de details")


        navigate("/form");

    };


    const dataBase = "http://localhost:3002";


    const clickedDelete = async (contract) => {
    
        try {

            let resultado = await axios.delete(dataBase + "/contracts/deletecontract/" + contract

            )

            bringContracts()
            .then((contracts) => {
                console.log(contracts, "estos son los contratos")
                setContracts(contracts);
            })
            .catch((error) => console.error(error));

        } catch (error) {
            console.error(' FALLOOO')
        }
    }



    const clickedNew = () => {
        dispatch(addContractTable({ details: {} }));
        // console.log(contract, "estos son los contracts de details en NEW")
        navigate("/newForm");
    }


    if (contracts.length === 0) { return <div className="tablewithoutcontracts"></div>; }
    else if (contracts.length > 0) {
        return (
            <div className='container'>
                <div className="background-class">
                    <div className="new-contract-button" onClick={() => clickedNew()}>
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
                                            <div className="modify-button" onClick={() => clickedModify(contract)} >
                                                <div className="left-modify-button">-</div>
                                                <div className="right-modify-button">Editar</div>
                                            </div>
                                            <div className="delete-button" onClick={() => clickedDelete(contract._id)}>
                                                <div className="left-delete-button">-</div>
                                                <div className="right-delete-button">Borrar</div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </Table>

                </div>
            </div>

        )
    }


}

export default ContractsTable;