import classes from "./Table.module.css";

function Table(props) {
    return (
        <div className={classes.table}>
            {props.name}
        </div>
    );
}

export default Table;
