import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import MenuForm from "./MenuForm/MenuForm";

function Menu(props) {

    const addMealToMenu = (values) =>{
        props.addMealToMenu(values);
    }

    let menu = props.menu;
    return (
        <div>
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
            <div>
                <MenuForm onSubmit={addMealToMenu}/>
            </div>
            <div>
                Import/Export
            </div>
        </div>
    );
}

export default Menu;