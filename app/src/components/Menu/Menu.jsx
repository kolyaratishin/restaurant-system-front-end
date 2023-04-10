import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";

function Menu(props) {
    let menu = props.menu;
    return (
        <div>
            <table className={classes.menu_table}>
                <caption>Меню</caption>
                <tr>
                    <th>Назва</th>
                    <th>Ціна</th>
                    <th>Розмір</th>
                </tr>
                {menu.map(item => <MenuItem name={item.name} price={item.price} size={item.size}/>)}
            </table>
        </div>
    );
}

export default Menu;