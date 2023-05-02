import classes from "./ReceiptMenuItem.module.css";
import AddMealButton from "../../../common/Buttons/AddMealButton/AddMealButton";
function ReceiptMenuItem(props) {

    const handleClick = (event) => {
        const element = event.target; // Отримуємо HTML елемент, на якому відбувся клік
        const row = element.parentElement.parentElement;
        const rowData = Array.from(row.children).map(cell => cell.innerText); // Отримуємо дані з комірок рядка в масиві
        const meal = {
            id: +rowData[0],
            name: rowData[1],
            price: +rowData[2]
        }
        props.addMealToReceipt(meal, props.receiptId);
    };

    return (
        <tr className={classes.row}>
            <td className={classes.row_id}>{props.id}</td>
            <td className={classes.meal_name}>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.size}</td>
            <td className={classes.add_button}><AddMealButton onClick={handleClick}/></td>
        </tr>
    );
}

export default ReceiptMenuItem;