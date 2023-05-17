import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {withRouter} from "../../../hoc/withRouter";
import {Navigate} from "react-router-dom";

function Login(props) {

    if (props.isAuth) {
        return <Navigate to="/tables"/>;
    }

    return (
        <div>
            <LoginFormRedux login={props.login} loginError={props.loginError}/>
        </div>
    );
}

function LoginForm(props) {
    const onLoginSubmit = (values) => {
        props.login(values.username, values.password);
    }

    return (
        <div className={classes.form_container}>
            <form className={classes.login_form} onSubmit={props.handleSubmit(onLoginSubmit)}>
                <h2>Авторизація</h2>
                {props.loginError && <div className={classes.error}>Не правильний логін або пароль</div>}
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