import classes from "./Receipt.module.css";
import ReceiptItem from "./ReceiptItem/ReceiptItem";
import ReceiptMenu from "./ReceiptMenu/ReceiptMenu";

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

    let countReceipt = () => {
        props.countReceipt();
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
                <button onClick={countReceipt}>Обрахувати</button>
            </div>
            <div className={classes.menu}>
                <ReceiptMenu addMealToReceipt={props.addMealToReceipt} menu={props.menu}/>
            </div>
        </div>
    );
}

export default Receipt;