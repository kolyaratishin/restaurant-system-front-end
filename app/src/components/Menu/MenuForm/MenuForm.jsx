import {Field, reduxForm} from "redux-form";
import classes from "./MenuForm.module.css";


function MenuForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <p className={classes.input_name}>Назва</p>
                <Field component={"input"} name="name" placeholder="Введіть ім'я продукту"/>
                <p className={classes.input_name}>Ціна</p>
                <Field component={"input"} name="price" placeholder="Введіть ціну продукту"/>
                <p className={classes.input_name}>Розмір</p>
                <Field component={"input"} name="size" placeholder="Введіть розмір продукту"/>
            </div>
            <button className={classes.add_button}>Додати</button>
        </form>
    );
}

const MenuFormRedux = reduxForm({form: "menuForm"})(MenuForm);

export default MenuFormRedux;