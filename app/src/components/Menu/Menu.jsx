import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";

function Menu() {
    return (
        <div>
            <table className={classes.menu_table}>
                <caption>Меню</caption>
                <tr>
                    <th>Назва</th>
                    <th>Ціна</th>
                    <th>Розмір</th>
                </tr>
                <MenuItem name={"Піца"} price={160.00} size={"500г"}/>
            </table>
        </div>
    );
}

export default Menu;