import classes from "./Receipt.module.css";
import ReceiptItem from "./ReceiptItem/ReceiptItem";
import TableStatus from "./TableStatus/TableStatus";
import {Navigate} from "react-router-dom";
import ReceiptMenuContainer from "./ReceiptMenu/ReceiptMenuContainer";

function Receipt(props) {
    if(!props.currentUser.isAuth){
        return <Navigate to={"/login"}/>
    }

    let meals = []
    let currentReceipt = props.currentReceipt;
    let totalPrice = 0;
    if (currentReceipt) {
        if (currentReceipt.meals) {
            meals = currentReceipt.meals;
            totalPrice = currentReceipt.totalPrice;
        }
    }

    let countReceipt = () => {
        props.countReceipt(props.currentReceipt);
    }

    return (
        <div className={classes.receipt_content}>
            <TableStatus status={props.currentTable.status} setStatus={props.setStatus} tableId={props.currentReceipt.id}/>
            <div className={classes.receipt}>
                <table className={classes.receipt_table}>
                    <caption>Замовлення</caption>
                    <tr>
                        <th>Назва</th>
                        <th>Кількість</th>
                        <th>Ціна</th>
                    </tr>
                    {meals.map(meal => <ReceiptItem receiptId={props.currentReceipt.id} id={meal.id} name={meal.name} price={meal.price} amount={meal.amount} removeMealFromReceipt={props.removeMealFromReceipt}/>)}
                    <tr>
                        <th className={classes.sum_row} colSpan="3">Cума: {totalPrice}</th>
                    </tr>
                </table>
                <div className={classes.count_button_container}>
                    <button className={classes.count_button} onClick={countReceipt}>Обрахувати</button>
                </div>
            </div>
            <div className={classes.menu}>
                <ReceiptMenuContainer/>
            </div>
        </div>
    );
}

export default Receipt;