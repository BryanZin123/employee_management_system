import './App.css';
import HeaderFnComponent from './components/HeaderFnComponent';
import FooterFnComponent from './components/FooterFnComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListFnEmployeeComponent from './components/ListFnEmployeeComponent';
import CreateEmployeeFnComponent from './components/CreateEmployeeFnComponent';
import UpdateEmployeeFnComponent from './components/UpdateEmployeeFnComponent';
import ViewEmployeeFnComponent from './components/ViewEmployeeFnComponent';
import ErrorFnPageComponent from './components/ErrorFnPageComponent';

function App() {
  return (
   
    <Router>
    <HeaderFnComponent/>
    <div className='container'>
    <Routes>
    <Route path="/" element={<ListFnEmployeeComponent/>}></Route>
    <Route path="/employee" element={<ListFnEmployeeComponent/>}></Route>
    <Route path="/add-employee" element={<CreateEmployeeFnComponent/>}></Route>
    <Route path="/update-employee/:id" element={<UpdateEmployeeFnComponent/>}></Route>
    <Route path="/view-employee/:id" element={<ViewEmployeeFnComponent/>}></Route>
    <Route path="*" element={<ErrorFnPageComponent/>}></Route>
    </Routes>
    </div>
    <FooterFnComponent/>
    </Router>
   
  );
}

export default App;
