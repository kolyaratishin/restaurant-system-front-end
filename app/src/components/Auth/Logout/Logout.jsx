import classes from "./Logout.module.css";

function Logout(props) {

    const logout = () => {
        props.logout();
        props.navigate("/login")
    }

    return (
        <div>
            <button onClick={logout} className={classes.logout_button}>Вийти</button>
        </div>
    );
}

export default Logout;