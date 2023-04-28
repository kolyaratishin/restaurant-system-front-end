import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import MenuForm from "./MenuForm/MenuForm";
import AddGroupForm from "./AddGroupForm/AddGroupForm";
import {Navigate} from "react-router-dom";
import RemoveGroupButton from "../common/Buttons/RemoveButton/RemoveGroupButton/RemoveGroupButton";
import SearchMealInput from "../common/Inputs/SearchMealInput/SearchMealInput";

function Menu(props) {
    if(!props.currentUser.isAuth){
        return <Navigate to={"/login"}/>
    }

    const addMealToMenu = (values) => {
        props.addMealToMenu(values);
    }

    const addMenuGroup = (values) => {
        props.addMenuGroup(values.groupName, props.restaurantId);
    }

    const removeMenuGroup = (event) => {
        const element = event.target; // Отримуємо HTML елемент, на якому відбувся клік
        const row = element.parentElement.parentElement;
        const rowData = Array.from(row.children).map(cell => cell.innerText); // Отримуємо дані з комірок рядка в масиві
        const groupId= +rowData[0];
        props.removeMenuGroup(groupId);
    };

    let menuGroups = props.menuGroups;
    return (
        <div className={classes.menu_content}>
            <div className={classes.menu}>
                <SearchMealInput onChange={props.onSearchChange}/>
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
                                    <td className={classes.row_id}>
                                        {item.id}
                                    </td>
                                    <th className={classes.group_name} colSpan="3">
                                        {item.name}
                                    </th>
                                    <td className={classes.remove_button}>
                                        <RemoveGroupButton onClick={removeMenuGroup}/>
                                    </td>
                                </tr>
                                {item.menu.map(menuItem => <MenuItem id={menuItem.id} name={menuItem.name} price={menuItem.price}
                                                                size={menuItem.size} groupId={item.id} removeMealFromMenuGroup={props.removeMealFromMenuGroup}
                                                                     updateMeal={props.updateMeal}/>)}
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