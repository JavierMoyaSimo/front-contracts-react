
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContractsTable from "./containers/ContractsTable/ContractsTable";
import ContractsForm from './containers/ContractsForm/ContractsForm';
import NewContractsForm from './containers/NewContractsForm/NewContractsForm';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<ContractsTable />} />
          <Route path='/form' element={<ContractsForm />} />
          <Route path='/newForm' element={<NewContractsForm />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
