import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import MenuContainer from "./components/Menu/MenuContainer";
import TablesContainer from "./components/Tables/TablesContainer";
import ReceiptContainer from "./components/Receipt/ReceiptContainer";
import ImportExport from "./components/ImportExport/ImportExport";
import LoginContainer from "./components/Auth/Login/LoginContainer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/tables"
                           element={<TablesContainer/>}/>
                    <Route path="/tables/:tableId?"
                           element={<ReceiptContainer/>}/>
                    <Route path="/menu"
                           element={<MenuContainer/>}/>
                    <Route path="/statistics"
                           element={<Statistics/>}/>
                    <Route path="/import-export"
                           element={<ImportExport/>}/>
                    <Route path="/login"
                           element={<LoginContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
