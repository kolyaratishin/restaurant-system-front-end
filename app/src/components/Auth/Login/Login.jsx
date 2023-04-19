import classes from "../../Menu/AddGroupForm/AddGroupForm.module.css";
import {Field, reduxForm} from "redux-form";

function Login(props) {

    const onLoginSubmit = (values) => {
        props.login(values.username, values.password);
    }

    return (
       <div>
           <LoginFormRedux onSubmit={onLoginSubmit}/>
       </div>
    );
}

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
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

const LoginFormRedux = reduxForm({form: "loginForm"})(LoginForm);

export default Login;