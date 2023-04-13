import classes from "./ReceiptMenu.module.css";
import ReceiptMenuItem from "./ReceiptMenuItem/ReceiptMenuItem";


function ReceiptMenu(props) {
    let menuGroups = props.menuGroups;
    return (
        <div>
            <table className={classes.menu_table}>
                <caption>Меню</caption>
                <tr>
                    <th>Назва</th>
                    <th>Ціна</th>
                    <th>Розмір</th>
                </tr>
                {menuGroups.map(item => {
                        return (
                            <tbody>
                            <tr>
                                <th className={classes.group_name} colSpan="3">
                                    {item.name}
                                </th>
                            </tr>
                            {
                                item.menu.map(menuItem => <ReceiptMenuItem receiptId={props.receiptId} id={menuItem.id} name={menuItem.name} price={menuItem.price}
                                                                 size={menuItem.size} addMealToReceipt={props.addMealToReceipt}/>)}
                            </tbody>
                        )
                    }
                )
                }

            </table>
        </div>
    );
}

export default ReceiptMenu;