import classes from "./ReceiptItem.module.css";

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
        props.removeMealFromReceipt(meal);
    };

    return (
        <tr className={classes.row}>
            <td className={classes.row_id}>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.amount}</td>
            <td>{props.price}</td>
            <td><button onClick={handleClick}>-</button></td>
        </tr>
    );
}

export default ReceiptItem;