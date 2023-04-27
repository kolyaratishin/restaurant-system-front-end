import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MenuContainer from "./components/Menu/MenuContainer";
import TablesContainer from "./components/Tables/TablesContainer";
import ReceiptContainer from "./components/Receipt/ReceiptContainer";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import RegistrationContainer from "./components/Auth/Registration/RegistrationContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import EmployeesContainer from "./components/Employees/EmployeesContainer";
import ImportExportContainer from "./components/ImportExport/ImportExportContainer";
import StatisticsContainer from "./components/Statistics/StatisticsContainer";

function App(props) {

    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/tables"
                           element={<TablesContainer/>}/>
                    <Route path="/tables/:tableId?"
                           element={<ReceiptContainer/>}/>
                    <Route path="/menu"
                           element={<MenuContainer/>}/>
                    <Route path="/statistics"
                           element={<StatisticsContainer/>}/>
                    <Route path="/import-export"
                           element={<ImportExportContainer/>}/>
                    <Route path="/employees"
                           element={<EmployeesContainer/>}/>
                    <Route path="/login"
                           element={<LoginContainer/>}/>
                    <Route path="/registration"
                           element={<RegistrationContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
