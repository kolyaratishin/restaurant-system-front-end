import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import MenuForm from "./MenuForm/MenuForm";
import AddGroupForm from "./AddGroupForm/AddGroupForm";

function Menu(props) {

    const addMealToMenu = (values) => {
        props.addMealToMenu(values);
    }

    const addMenuGroup = (values) => {
        props.addMenuGroup(values.groupName, props.restaurantId);
    }

    let menuGroups = props.menuGroups;
    return (
        <div className={classes.menu_content}>
            <div>
                <table className={classes.menu_table}>
                    <caption>Меню</caption>
                    <tr>
                        <th>Назва</th>
                        <th>Ціна</th>
                        <th>Розмір</th>
                    </tr>
                    {menuGroups.map(item => {
                            return (
                                <tbody>
                                <tr>
                                    <th className={classes.group_name} colSpan="3">
                                        {item.name}
                                    </th>
                                </tr>
                                {item.menu.map(menuItem => <MenuItem id={menuItem.id} name={menuItem.name} price={menuItem.price}
                                                                size={menuItem.size} groupId={item.id} removeMealFromMenuGroup={props.removeMealFromMenuGroup}/>)}
                                </tbody>
                            )
                        }
                    )
                    }
                </table>
            </div>
            <div className={classes.menu_form}>
                <div className={classes.form_caption}>
                    ДОДАВАННЯ НОВОГО ПРОДУКТУ
                </div>
                <MenuForm onSubmit={addMealToMenu} menuGroups={menuGroups}/>
            </div>
            <div className={classes.menu_form}>
                <div className={classes.form_caption}>
                    ДОДАВАННЯ НОВОЇ ГРУПИ
                </div>
                <AddGroupForm onSubmit={addMenuGroup}/>
            </div>
        </div>
    );
}

export default Menu;