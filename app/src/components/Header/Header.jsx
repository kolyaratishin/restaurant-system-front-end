import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.item}>
                <NavLink to="/tables" className={isActive}>Столи</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/menu" className={isActive}>Меню</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/statistics" className={isActive}>Статистика</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/import-export" className={isActive}>Імпорт/Експорт</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/login" className={isActive}>Логін</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/registration" className={isActive}>Реєстрація</NavLink>
            </div>
        </header>
    );
}

function isActive({isActive, isPending}) {
    return isPending ? classes["pending"] : isActive ? classes["active"] : "";
}

export default Header;