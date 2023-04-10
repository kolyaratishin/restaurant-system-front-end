import classes from "./MenuItem.module.css";
function MenuItem(props) {
    return (
        <tr className={classes.row}>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.size}</td>
        </tr>
    );
}

export default MenuItem;