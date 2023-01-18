import React, { useState, useEffect } from "react";
// import { NavItem } from "react-bootstrap";
// import Table from "react-bootstrap/Table"
import './Table.scss'
import { useSelector, useDispatch } from "react-redux";
import { tableData } from "./tableSlice";
import { bringContracts, bringContractsById, addContract, deleteContract, modifyContract, bringLocalitiesByCp } from "../../services/apiCalls";


const Table = () => {

    // const dispatch = useDispatch();
    // const selectedContract = useSelector(tableData);

    //Hooks
    const [contracts, setContracts] = useState([]);

    //1º vez componente
    useEffect(() => {

        if (contracts.length === 0) {
            bringContracts()
                .then((contracts) => {
                    setContracts(contracts);
                })
                .catch((error) => console.error(error));
        }
    }, []);


    //Cada vez que el estado se modifica
    useEffect(() => {

        bringContracts()
            .then((contracts) => {
                setContracts(contracts);
            })
            .catch((error) => console.error(error));

    }, [contracts]);


    if (contracts.length === 0) { return <div className="tablewithoutcontracts"></div>; }
    else if (contracts.length > 0) {
        return (
            <div className='tableDesign'>
                Soy Table
            </div>
        )
    }


}

export default Table;