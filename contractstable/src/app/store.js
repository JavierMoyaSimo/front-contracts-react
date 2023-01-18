import { configureStore } from '@reduxjs/toolkit';  // Importa un método que configura nuestro "Almacén"
import contractsTableSlice from '../containers/ContractsTable/contractsTableSlice';
import contractsFormSlice from '../containers/ContractsForm/contractsFormSlice';


export default configureStore({
    reducer: {
        contractsTable: contractsTableSlice,
        contractsForm: contractsFormSlice
    }
});