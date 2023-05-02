import classes from "./MenuItem.module.css";
import RemoveItemButton from "../../common/Buttons/RemoveButton/RemoveItemButton/RemoveItemButton";
import UpdateFieldInput from "../../common/Inputs/UpdateFieldInput/UpdateFieldInput";

function MenuItem(props) {

    const handleClick = (event) => {
        const element = event.target; // Отримуємо HTML елемент, на якому відбувся клік
        const row = element.parentElement.parentElement;
        const rowData = Array.from(row.children).map(cell => cell.innerText); // Отримуємо дані з комірок рядка в масиві
        const mealId = +rowData[0];
        props.removeMealFromMenuGroup(props.groupId, mealId);
    };

    const updateName = (name) => {
        props.updateMeal(props.id, {
            name,
            price: props.price
        })
    }

    const updatePrice = (price) => {
        props.updateMeal(props.id, {
            name: props.name,
            price
        })
    }

    return (
        <tr className={classes.row}>
            <td className={classes.row_id}>{props.id}</td>
            <td className={classes.meal_name}><UpdateFieldInput value={props.name} updateValue={updateName}/></td>
            <td><UpdateFieldInput value={props.price} updateValue={updatePrice}/></td>
            <td>{props.size}</td>
            <td className={classes.remove_button}>
                <RemoveItemButton onClick={handleClick}/>
            </td>
        </tr>
    );
}

export default MenuItem;