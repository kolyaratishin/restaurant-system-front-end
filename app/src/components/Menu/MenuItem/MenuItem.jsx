import classes from "./MenuItem.module.css";
import RemoveItemButton from "../../common/Buttons/RemoveButton/RemoveItemButton/RemoveItemButton";
function MenuItem(props) {

    const handleClick = (event) => {
        const element = event.target; // Отримуємо HTML елемент, на якому відбувся клік
        const row = element.parentElement.parentElement;
        const rowData = Array.from(row.children).map(cell => cell.innerText); // Отримуємо дані з комірок рядка в масиві
        const mealId= +rowData[0];
        props.removeMealFromMenuGroup(props.groupId, mealId);
    };

    return (
        <tr className={classes.row}>
            <td className={classes.row_id}>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.size}</td>
            <td className={classes.remove_button}>
                <RemoveItemButton onClick={handleClick}/>
            </td>
        </tr>
    );
}

export default MenuItem;