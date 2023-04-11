import classes from "./ReceiptMenu.module.css";
import ReceiptMenuItem from "./ReceiptMenuItem/ReceiptMenuItem";


function ReceiptMenu(props) {
    let menu = props.menu;
    return (
        <div>
            <table className={classes.menu_table}>
                <caption>Меню</caption>
                <tr>
                    <th>Назва</th>
                    <th>Ціна</th>
                    <th>Розмір</th>
                </tr>
                {menu.map(item => <ReceiptMenuItem id={item.id} name={item.name} price={item.price} size={item.size} addMealToReceipt={props.addMealToReceipt}/>)}
            </table>
        </div>
    );
}

export default ReceiptMenu;