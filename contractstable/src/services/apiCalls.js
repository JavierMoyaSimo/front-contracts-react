import axios from 'axios';

const dataBase = "http://localhost:3000";


//LISTADO DE TODOS LOS CONTRATOS
export const bringContracts = async () => {
    let res = await axios.get(dataBase + "/contracts/listcontracts");

    return res.data;
};

//CONTRATOS POR ID
export const bringContractsById = async (id) => {
    let res = await axios.get(dataBase + "/contracts/listcontracts/" + id);

    return res.data;
};


//CREAR CONTRATO NUEVO
export const addContract = async (body) => {
    let res = await axios.post(dataBase + "/contracts/addcontract/", body);
    return res;
};


//BORRAR CONTRATO
export const deleteContract = async (id) => {
    let res = await axios.delete(dataBase + "/contracts/deletecontract/" + id);

    return res.data;
};

//MODIFICAR CONTRATO
export const modifyContract = async (id, body) => {
    let res = await axios.put(dataBase + "/contracts/modifycontract/" + id, body);
    return res;
    //o res.data
}