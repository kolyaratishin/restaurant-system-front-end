import Table from "./Table/Table";
import {Navigate, NavLink} from "react-router-dom";
import TableForm from "./Table/TableForm/TableForm";
import classes from "./Tables.module.css";

function Tables(props) {
    if (!props.currentUser.isAuth) {
        return <Navigate to={"/login"}/>
    }

    let tables = props.tables;

    const addTable = (values) => {
        props.addTable(values.tableName, props.restaurantId);
    }

    const onRemoveTableClick = (tableId) => {
        props.deleteTableById(tableId);
    }
    return (
        <div className={classes.tables_content}>
            <div className={classes.tables}>
                {tables.map(table =>
                    <div className={classes.tables_container}>
                        <NavLink to={"/tables/" + table.id}>
                            <Table id={table.id} name={table.name} status={table.status}
                                   deleteTableById={props.deleteTableById}/>
                        </NavLink>
                        <div className={classes.remove_table_button}>
                            <button onClick={() => onRemoveTableClick(table.id)}>✖</button>
                        </div>
                    </div>
                )}
            </div>
            <div className={classes.table_form}>
                <p className={classes.table_form_caption}>ДОДАТИ НОВИЙ СТІЛ</p>
                <TableForm onSubmit={addTable}/>
            </div>
        </div>
    );
}

export default Tables;