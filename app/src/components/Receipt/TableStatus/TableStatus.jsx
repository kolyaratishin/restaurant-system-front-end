function TableStatus(props) {

    const status = props.status;
    const setStatus = (event) => {
        const selectedStatus = event.target.value;
        props.setStatus(selectedStatus, props.tableId);
    }

    return (
        <div>
            <div>
                Статус
            </div>
            <select onChange={setStatus} name="tableStatus" id="tableStatus" value={status}>
                <option value="FREE">Вільно</option>
                <option value="BUSY">Зайнято</option>
                <option value="RESERVED">Замовлено</option>
            </select>
        </div>
    );
}

export default TableStatus;
