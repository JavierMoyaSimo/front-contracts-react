
import { createSlice } from '@reduxjs/toolkit';//Método que me permite crear el slice


export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        details: {}
    },
    reducers: {
        addContract: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { addContract } = tableSlice.actions;//Este addContract que exportamos es el mismo addContract que contiene los reducers.
//Lo llamaremos en el componente container table


//tableData contiene el estado del reducer, es decir, tableData es lo que van a leer
// los componentes conectados a este reducer, para saber sus details
export const tableData = (state) => state.table;

export default tableSlice.reducer;