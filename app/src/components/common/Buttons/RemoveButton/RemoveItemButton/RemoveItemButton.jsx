import classes from "./RemoveItemButton.module.css";

const RemoveItemButton = (props) => {
    return <button onClick={props.onClick} className={classes.remove_button}>✖</button>
}

export default RemoveItemButton;