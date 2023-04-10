import Table from "./Table/Table";
import {NavLink} from "react-router-dom";

function Tables(props) {
    let tables = props.tables;
    return (
        <div>
            {tables.map(table => <NavLink to={"/tables/"+ table.id}><Table name={table.name} status={table.status}/></NavLink>)}
        </div>
    );
}

export default Tables;