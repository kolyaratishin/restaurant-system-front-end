import classes from "./TableStatus.module.css";

function TableStatus(props) {

    const status = props.status;
    const setStatus = (event) => {
        const selectedStatus = event.target.value;
        props.setStatus(selectedStatus, props.tableId);
    }

    return (
        <div className={classes.status}>
            <div className={classes.status_caption}>
                Статус стола
            </div>
            <select className={classes.status_select} onChange={setStatus} name="tableStatus" id="tableStatus" value={status}>
                <option className={classes.status_item} value="FREE">Вільно</option>
                <option className={classes.status_item} value="BUSY">Зайнято</option>
                <option className={classes.status_item} value="RESERVED">Замовлено</option>
            </select>
        </div>
    );
}

export default TableStatus;
