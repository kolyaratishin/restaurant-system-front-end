import classes from "./Employee.module.css";
import RemoveItemButton from "../../common/Buttons/RemoveButton/RemoveItemButton/RemoveItemButton";

const Employee = (props) => {

    const removeEmployee = (event) => {
        const element = event.target; // Отримуємо HTML елемент, на якому відбувся клік
        const row = element.parentElement.parentElement;
        const rowData = Array.from(row.children).map(cell => cell.innerText); // Отримуємо дані з комірок рядка в масиві
        const id= +rowData[0];
        props.removeEmployee(id);
    }

    return (
        <tr className={classes.row}>
            <td className={classes.row_id}>{props.id}</td>
            <td>{props.username}</td>
            <td>{props.password}</td>
            <td>{props.fullName}</td>
            <td className={classes.remove_button}>
                <RemoveItemButton onClick={removeEmployee}/>
            </td>
        </tr>
    )
}

export default Employee;