import { configureStore } from '@reduxjs/toolkit';  // Importa un método que configura nuestro "Almacén"
import tableSlice from '../containers/Table/tableSlice';


export default configureStore({
    reducer: {
        table: tableSlice
    }
});