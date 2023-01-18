
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Table from "./containers/Table/Table";



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Table />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
