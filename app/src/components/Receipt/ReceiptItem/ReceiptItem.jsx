import classes from "./ReceiptItem.module.css";
import RemoveItemButton from "../../common/Buttons/RemoveButton/RemoveItemButton/RemoveItemButton";
import UpdateFieldInput from "../../common/Inputs/UpdateFieldInput/UpdateFieldInput";

function ReceiptItem(props) {
    const handleClick = (event) => {
        const element = event.target; // Отримуємо HTML елемент, на якому відбувся клік
        const row = element.parentElement.parentElement;
        const rowData = Array.from(row.children).map(cell => cell.innerText); // Отримуємо дані з комірок рядка в масиві
        const meal = {
            id: +rowData[0],
            name: rowData[1],
            price: +rowData[2]
        }
        props.removeMealFromReceipt(meal, props.receiptId);
    };

    const updateMealAmount = (amount) => {
        props.updateMealAmount(props.receiptId, props.id, amount);
    }

    return (
        <tr className={classes.row}>
            <td className={classes.row_id}>{props.id}</td>
            <td className={classes.meal_name}>{props.name}</td>
            <td><UpdateFieldInput value={props.amount} updateValue={updateMealAmount} regExp="^[0-9]*$"/></td>
            <td>{props.price}</td>
            <td className={classes.remove_button}><RemoveItemButton onClick={handleClick}/></td>
        </tr>
    );
}

export default ReceiptItem;