import classes from "./Registration.module.css"
import {Field, reduxForm} from "redux-form";
import {withRouter} from "../../../hoc/withRouter";

function Registration(props) {
    return (
        <div>
            <RegistrationFormRedux register={props.register} successfulRegistration={props.successfulRegistration}/>
        </div>
    );
}

function RegistrationForm(props) {
    const onLoginSubmit = (values) => {
        props.register(values.username, values.password);
    }

    const successfulRegistration = props.successfulRegistration;
    return (
        <div className={classes.form_container}>
            <form className={classes.login_form} onSubmit={props.handleSubmit(onLoginSubmit)}>
                <h2>Реєстрація</h2>
                {successfulRegistration === true ?
                    <div className={classes.success}>Ви успішно зареєструвалися</div> :
                    successfulRegistration === false ?
                        <div className={classes.error}>Користувач з таким логіном вже існує</div> :
                        null
                }
                <div>
                    <div className={classes.form_group}>
                        <p className={classes.input_name}>Логін</p>
                        <Field component={"input"} name="username" placeholder="Введіть логін" type={"text"}/>
                    </div>
                    <div className={classes.form_group}>
                        <p className={classes.input_name}>Пароль</p>
                        <Field component={"input"} name="password" placeholder="Введіть пароль" type={"password"}/>
                    </div>
                </div>
                <div className={classes.form_group}>
                    <button className={classes.registration_button}>Зареєструватися</button>
                </div>
            </form>
        </div>

    );
}

const RegistrationFormWithRouter = withRouter(RegistrationForm);

const RegistrationFormRedux = reduxForm({form: "loginForm"})(RegistrationFormWithRouter);

export default Registration;