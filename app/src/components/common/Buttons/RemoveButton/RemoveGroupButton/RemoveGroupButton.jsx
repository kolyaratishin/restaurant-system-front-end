import classes from "./RemoveGrouplButton.module.css";

const RemoveGroupButton = (props) => {
    return <button onClick={props.onClick} className={classes.remove_button}>✖</button>
}

export default RemoveGroupButton;