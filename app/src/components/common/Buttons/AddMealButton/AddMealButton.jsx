import classes from "./AddMealButton.module.css";

const AddMealButton = (props) => {
    return <button onClick={props.onClick} className={classes.add_button}>+</button>
}

export default AddMealButton;