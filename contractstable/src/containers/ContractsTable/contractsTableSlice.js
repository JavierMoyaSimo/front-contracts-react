
import { createSlice } from '@reduxjs/toolkit';//Método que me permite crear el slice


export const contractsTableSlice = createSlice({
    name: 'contractsTable',
    initialState: {
        details: {}
    },
    reducers: {
        addContractTable: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        cleanContractTable: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { addContractTable, cleanContractTable } = contractsTableSlice.actions;
//Este addContractTable que exportamos es el mismo addContract que contiene los reducers.
//Lo llamaremos en el componente container table


//tableData contiene el estado del reducer, es decir, tableData es lo que van a leer
// los componentes conectados a este reducer, para saber sus details
export const contractsTableData = (state) => state.contractsTable;

export default contractsTableSlice.reducer;