
import { createSlice } from '@reduxjs/toolkit';//Método que me permite crear el slice


export const contractsFormSlice = createSlice({
    name: 'contractsForm',
    initialState: {
        details: {}
    },
    reducers: {
        addContractsForm: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { addContractsForm } = contractsFormSlice.actions;


//contractsFormData contiene el estado del reducer, es decir, contractsFormData es lo que van a leer
// los componentes conectados a este reducer, para saber sus details
export const contractsFormData = (state) => state.contractsForm;

export default contractsFormSlice.reducer;