import classes from "./EmployeeAddForm.module.css";
import {Field, reduxForm} from "redux-form";
import AddButton from "../../common/Buttons/AddButton/AddButton";
import {Input} from "../../common/FormsControls/FormControls";
import {requiredField} from "../../../utils/validators/validators";

function EmployeeAddForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Логін</p>
                <Field component={Input} name="username" placeholder="Введіть логін працівника" className={classes.input} validate={[requiredField]}/>
            </div>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Пароль</p>
                <Field component={Input} name="password" placeholder="Введіть пароль працівника" className={classes.input} type={"password"} validate={[requiredField]}/>
            </div>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Повне ім'я</p>
                <Field component={Input} name="fullName" placeholder="Введіть повне ім'я працівника" className={classes.input} validate={[requiredField]}/>
            </div>

            <AddButton/>
        </form>
    );
}

const EmployeeAddFormRedux = reduxForm({form: "employeeAddForm"})(EmployeeAddForm);

export default EmployeeAddFormRedux;