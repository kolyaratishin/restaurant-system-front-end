function ReceiptItem(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.amount}</td>
            <td>{props.price}</td>
        </tr>
    );
}

export default ReceiptItem;