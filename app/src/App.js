import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Tables from "./components/Tables/Tables";
import Statistics from "./components/Statistics/Statistics";
import MenuContainer from "./components/Menu/MenuContainer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/tables"
                           element={<Tables/>}/>
                    <Route path="/menu"
                           element={<MenuContainer/>}/>
                    <Route path="/statistics"
                           element={<Statistics/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
