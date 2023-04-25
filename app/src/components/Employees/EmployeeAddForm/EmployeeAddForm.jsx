import classes from "./EmployeeAddForm.module.css";
import {Field, reduxForm} from "redux-form";

function EmployeeAddForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <p className={classes.input}>Логін</p>
                <Field component={"input"} name="username" placeholder="Введіть логін працівника"/>
                <p className={classes.input}>Пароль</p>
                <Field component={"input"} name="password" placeholder="Введіть пароль працівника"/>
                <p className={classes.input}>Повне ім'я</p>
                <Field component={"input"} name="fullName" placeholder="Введіть повне ім'я працівника"/>
            </div>
            <button className={classes.add_button}>Додати</button>
        </form>
    );
}

const EmployeeAddFormRedux = reduxForm({form: "employeeAddForm"})(EmployeeAddForm);

export default EmployeeAddFormRedux;