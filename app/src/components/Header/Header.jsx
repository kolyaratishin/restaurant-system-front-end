import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import LogoutContainer from "../Auth/Logout/LogoutContainer";

function Header(props) {
    const currentUser = props.currentUser;
    const isAuth = currentUser.isAuth;
    return (
        <header className={classes.header}>
            <div className={classes.content_links}>
                {isAuth && (
                    <div className={classes.item}>
                        <NavLink to="/tables" className={isActive}>Столи</NavLink>
                    </div>
                )}
                {isAuth && (
                    <div className={classes.item}>
                        <NavLink to="/menu" className={isActive}>Меню</NavLink>
                    </div>
                )}
                {isAuth && (
                    <div className={classes.item}>
                        <NavLink to="/statistics" className={isActive}>Статистика</NavLink>
                    </div>
                )}
                {isAuth && (
                    <div className={classes.item}>
                        <NavLink to="/import-export" className={isActive}>Імпорт/Експорт</NavLink>
                    </div>
                )}
            </div>
            <div className={classes.auth_links}>
                {!isAuth && (
                    <div className={classes.item}>
                        <NavLink to="/login" className={isActive}>Логін</NavLink>
                    </div>
                )}
                {!isAuth && (
                    <div className={classes.item}>
                        <NavLink to="/registration" className={isActive}>Реєстрація</NavLink>
                    </div>
                )}
                {isAuth && (
                    <LogoutContainer/>
                )}
            </div>
        </header>
    );
}

function isActive({isActive, isPending}) {
    return isPending ? classes["pending"] : isActive ? classes["active"] : "";
}

export default Header;