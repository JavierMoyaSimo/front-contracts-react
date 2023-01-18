
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContractsTable from "./containers/ContractsTable/ContractsTable";
import ContractsForm from './containers/ContractsForm/ContractsForm';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<ContractsTable />} />
          <Route path='/form' element={<ContractsForm />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
