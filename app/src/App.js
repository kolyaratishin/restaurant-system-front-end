import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Statistics from "./components/Statistics/Statistics";
import MenuContainer from "./components/Menu/MenuContainer";
import TablesContainer from "./components/Tables/TablesContainer";
import ReceiptContainer from "./components/Receipt/ReceiptContainer";
import ImportExport from "./components/ImportExport/ImportExport";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import RegistrationContainer from "./components/Auth/Registration/RegistrationContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import EmployeesContainer from "./components/Employees/EmployeesContainer";

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
                           element={<Statistics currentUser={props.store.getState().user.currentUser}/>}/>
                    <Route path="/import-export"
                           element={<ImportExport currentUser={props.store.getState().user.currentUser}/>}/>
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
