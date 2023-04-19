import classes from "../../Menu/AddGroupForm/AddGroupForm.module.css";
import {Field, reduxForm} from "redux-form";
import {withRouter} from "../../../hoc/withRouter";

function Registration(props) {

    return (
       <div>
           <RegistrationFormRedux register={props.register}/>
       </div>
    );
}

function RegistrationForm(props) {
    const onLoginSubmit = (values) => {
        props.register(values.username, values.password);
        props.navigate("/login");
    }

    return (
        <form onSubmit={props.handleSubmit(onLoginSubmit)}>
            <div>
                <p className={classes.input_name}>Логін</p>
                <Field component={"input"} name="username" placeholder="Введіть логін" type={"text"}/>
                <p className={classes.input_name}>Пароль</p>
                <Field component={"input"} name="password" placeholder="Введіть пароль" type={"password"}/>
            </div>
            <button className={classes.add_button}>Зареєструватися</button>
        </form>
    );
}

const RegistrationFormWithRouter = withRouter(RegistrationForm);

const RegistrationFormRedux = reduxForm({form: "loginForm"})(RegistrationFormWithRouter);

export default Registration;