
import React, { useState, useEffect } from "react";
import './ContractsForm.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { contractsTableData, cleanContractTable } from "../ContractsTable/contractsTableSlice";
import { contractsFormData, addContractsForm, cleanContractForm } from "../ContractsForm/contractsFormSlice";
import { bringContractsById, bringLocalitiesByCp } from "../../services/apiCalls";
import axios from "axios";
import { errorCheck } from "../../services/errorManage";

const ContractsForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedContract = useSelector(contractsTableData);
    const contractFromRdx = selectedContract?.details;

    //Hook
    const [form, setForm] = useState([]);

    const [locality, setLocality] = useState([]);

    const [formError, setFormError] = useState({
        nombreError: "",
        apellido1Error: "",
        apellido2Error: "",
        documentoError: "",
        cpError: "",
        localidadError: "",
        direccionError: "",
        telefonoError: "",
    });

    useEffect(() => {


        if (form.length === 0) {

            bringContractsById(selectedContract?.details._id)
                .then((contract) => {

                    setForm(contract);
                })
                .catch((error) => console.error(error));
        }
    }, []);

    const clickedReturn = () => {
        dispatch(cleanContractTable({ details: {} }))
        dispatch(cleanContractForm({ details: {} }))
        navigate("/");
    };

    const errorHandler = (field, value, type) => {
        let error = "";
        error = errorCheck(value, type);
        setFormError((prevState) => ({
            ...prevState,
            [field + "Error"]: error,
        }));
    };

    const inputHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })


    };


    const dataBase = "http://localhost:3002";

    const bringLocalitiesByCp = async (cp) => {
        let res = await axios.get(dataBase + "/localities/getlocalidad/" + cp);

        console.log("AQUIESTOYDENTRO", res.data)
        dispatch(addContractsForm({ details: res.data }))
        return res.data;

    };

    const selectedLocality = useSelector(contractsFormData);
    const LocalityFromRdx =   selectedLocality?.details; 



    const cpinputHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })

        bringLocalitiesByCp(e.target.value)


    };



    const modifyContract = async () => {
        try {

            let resultado = await axios.put(dataBase + "/contracts/modifycontract/" + contractFromRdx?._id,
                {
                    nombre: form.nombre,
                    apellido1: form.apellido1,
                    apellido2: form.apellido2,
                    documento: form.documento,
                    cp: form.cp,
                    localidad: form.localidad,
                    direccion: form.direccion,
                    telefono: form.telefono

                }

            )

            console.log(resultado, "este es el resultado de modificontrat")
            dispatch(cleanContractTable({ details: {} }))
            dispatch(cleanContractForm({ details: {} }))

            navigate("/");

        } catch (error) {
            console.error(' FALLOOO')
        }

    };

    // const newContract = async () => {
    //     try {

    //         let resultado = await axios.put(dataBase + "/contracts/addcontract",
    //             {
    //                 nombre: form.nombre,
    //                 apellido1: form.apellido1,
    //                 apellido2: form.apellido2,
    //                 documento: form.documento,
    //                 cp: form.cp,
    //                 localidad: form.localidad,
    //                 direccion: form.direccion,
    //                 telefono: form.telefono

    //             }

    //         )

    //         console.log(resultado, "este es el resultado de newContrat")

    //         navigate("/");

    //     } catch (error) {
    //         console.error(' FALLOOO')
    //     }

    // };

    // if (selectedContract?.details !== undefined) {
    return (



        <div className="registerDesign">
            <div className="formRegisterSquare">
                <h1 className="registerTittleDesign">FORMULARIO</h1>
                <div >
                    <input
                        type="text"
                        name="nombre"
                        className="registerInputs"
                        placeholder="Nombre"
                        value={form.nombre}
                        required
                        onChange={inputHandler}
                        onInput={(e) => errorHandler(e.target.name, e.target.value, "texto")}
                    />
                    <div className="errorInput">{formError.nombreError}</div>
                    <input
                        type="text"
                        name="apellido1"
                        className="registerInputs"
                        placeholder="Apellido1"
                        value={form.apellido1}
                        onChange={inputHandler}
                        onInput={(e) =>
                            errorHandler(e.target.name, e.target.value, "texto")
                        }
                    />
                    <div className="errorInput">{formError.apellido1Error}</div>
                    <input
                        type="text"
                        name="apellido2"
                        className="registerInputs"
                        placeholder="Apellido2"
                        value={form.apellido2}
                        onChange={inputHandler}
                        onInput={(e) =>
                            errorHandler(e.target.name, e.target.value, "texto")
                        }
                    />
                    <div className="errorInput">{formError.apellido2Error}</div>
                    <input
                        type="text"
                        name="documento"
                        className="registerInputs"
                        placeholder="DNI"
                        required
                        value={form.documento}
                        onChange={inputHandler}
                        onInput={(e) => errorHandler(e.target.name, e.target.value, "documento")}
                    />
                    <div className="errorInput">{formError.documentoError}</div>
                    <input
                        type="text"
                        name="cp"
                        className="registerInputs"
                        placeholder="Codigo Postal"
                        required
                        value={form.cp}
                        onChange={cpinputHandler}

                        onInput={(e) =>
                            errorHandler(e.target.name, e.target.value, "cp")
                        }
                    />
                    <div className="errorInput">{formError.cpError}</div>
                    <input
                        id="localityinput"
                        type="text"
                        name="localidad"
                        readOnly
                        value={LocalityFromRdx.municipio_nombre ? LocalityFromRdx.municipio_nombre : "" }
                        className="registerInputs"
                        onChange={inputHandler}
                    />
                    <input
                        type="text"
                        name="direccion"
                        className="registerInputs"
                        placeholder="Direccion"
                        value={form.direccion}
                        onChange={inputHandler}
                        onInput={(e) =>
                            errorHandler(e.target.name, e.target.value, "direccion")
                        }
                    />
                    <div className="errorInput">{formError.direccionError}</div>

                    <input
                        type="text"
                        name="telefono"
                        className="registerInputs"
                        placeholder="Teléfono"
                        required
                        value={form.telefono}
                        onChange={inputHandler}
                        onInput={(e) =>
                            errorHandler(e.target.name, e.target.value, "telefono")
                        }
                    />
                    <div className="errorInput">{formError.telefonoError}</div>

                    <br></br>
                    <div className="buttoncenter">
                        <div onClick={() => modifyContract()} className="registerButton">
                            Modificar!
                        </div>
                        <div id="regerror" className="errorInput"></div>
                    </div>
                    <div className="buttoncenter">
                        <div onClick={() => clickedReturn()} className="registerButton">
                            Volver
                        </div>
                        <div id="regerror" className="errorInput"></div>
                    </div>



                </div>
            </div>
        </div>
    )
    // } else {


    // }
}







export default ContractsForm;