import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {withRouter} from "../../../hoc/withRouter";

function Login(props) {

    return (
        <div>
            <LoginFormRedux login={props.login}/>
        </div>
    );
}

function LoginForm(props) {
    const onLoginSubmit = (values) => {
        props.login(values.username, values.password);
        props.navigate("/");
    }

    return (
        <div className={classes.form_container}>
            <form className={classes.login_form} onSubmit={props.handleSubmit(onLoginSubmit)}>
                <h2>Авторизація</h2>
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
                    <button className={classes.login_button}>Увійти</button>
                </div>
            </form>
        </div>

    );
}

const LoginFormWithRouter = withRouter(LoginForm);

const LoginFormRedux = reduxForm({form: "loginForm"})(LoginFormWithRouter);

export default Login;