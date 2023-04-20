import classes from "../../Menu/AddGroupForm/AddGroupForm.module.css";
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
        <form onSubmit={props.handleSubmit(onLoginSubmit)}>
            <div>
                <p className={classes.input_name}>Логін</p>
                <Field component={"input"} name="username" placeholder="Введіть логін" type={"text"}/>
                <p className={classes.input_name}>Пароль</p>
                <Field component={"input"} name="password" placeholder="Введіть пароль" type={"password"}/>
            </div>
            <button className={classes.add_button}>Увійти</button>
        </form>
    );
}

const LoginFormWithRouter = withRouter(LoginForm);

const LoginFormRedux = reduxForm({form: "loginForm"})(LoginFormWithRouter);

export default Login;