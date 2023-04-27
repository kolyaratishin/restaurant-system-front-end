import classes from "./Table.module.css";

function Table(props) {
    const status = props.status === "FREE" ? "Вільно" : props.status === "BUSY" ? "Зайнято" : "Замовлено";

    return (
        <div className={classes.table}>
            <div className={classes.table_name}>
                {props.name}
            </div>
            <div>
                Статус: {status}
            </div>
        </div>
    );
}

export default Table;
