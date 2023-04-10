import classes from "./Receipt.module.css";
import MenuContainer from "../Menu/MenuContainer";
import ReceiptItem from "./ReceiptItem/ReceiptItem";

function Receipt(props) {
    let meals = []
    let currentReceipt = props.currentReceipt;
    let totalPrice = 0;
    if (currentReceipt) {
        if (currentReceipt.meals) {
            meals = currentReceipt.meals;
            totalPrice = currentReceipt.totalPrice;
        }
    }
    return (
        <div className={classes.receipt_content}>
            <div className={classes.receipt}>
                <table className={classes.receipt_table}>
                    <caption>Замовлення</caption>
                    <tr>
                        <th>Назва</th>
                        <th>Кількість</th>
                        <th>Ціна</th>
                    </tr>
                    {meals.map(meal => <ReceiptItem name={meal.name} price={meal.price} amount={meal.amount}/>)}
                    <tr>
                        <th colSpan="3">Cума: {totalPrice}</th>
                    </tr>
                </table>
            </div>
            <div className={classes.menu}>
                <MenuContainer/>
            </div>
        </div>
    );
}

export default Receipt;