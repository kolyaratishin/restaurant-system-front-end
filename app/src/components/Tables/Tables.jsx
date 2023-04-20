import Table from "./Table/Table";
import {Navigate, NavLink} from "react-router-dom";
import TableForm from "./Table/TableForm/TableForm";
import classes from "./Tables.module.css";

function Tables(props) {
    if(!props.currentUser.isAuth){
        return <Navigate to={"/login"}/>
    }

    let tables = props.tables;

    const addTable = (values) => {
        props.addTable(values.tableName, props.restaurantId);
    }
    return (
        <div className={classes.tables_content}>
            <div className={classes.tables}>
                {tables.map(table => <NavLink to={"/tables/" + table.id}><Table name={table.name}
                                                                                status={table.status}/></NavLink>)}
            </div>
            <div className={classes.table_form}>
                <p className={classes.table_form_caption}>ДОДАТИ НОВИЙ СТІЛ</p>
                <TableForm onSubmit={addTable}/>
            </div>
        </div>
    );
}

export default Tables;