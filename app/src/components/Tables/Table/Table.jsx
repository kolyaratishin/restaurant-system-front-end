import classes from "./Table.module.css";

function Table(props) {
    return (
        <div className={classes.table}>
            {props.name}
            <div>
                Status: {props.status}
            </div>
        </div>
    );
}

export default Table;
