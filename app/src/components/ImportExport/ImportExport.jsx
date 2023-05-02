import ImportContainer from "./Import/ImportContainer";
import ExportContainer from "./Export/ExportContainer";
import {Navigate} from "react-router-dom";

function ImportExport(props) {
    if (!props.currentUser.isAuth){
        return <Navigate to={"/login"}/>
    }

    if(props.currentUser.role !== "ADMIN"){
        return <Navigate to={"/tables"}/>
    }

    return (
        <div>
            <ImportContainer/>
            <ExportContainer/>
        </div>
    );
}

export default ImportExport;