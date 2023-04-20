import classes from "./Export.module.css";

function Export(props) {
    const onDownloadButtonClick = () => {
        props.exportMenuToFile(props.restaurantId);
    }

    return (
        <div className={classes.import_content}>
            <h3>
                Нажміть щоб експортувати дані у файл
            </h3>
            <div>
                <button onClick={onDownloadButtonClick}>Заважнтажити</button>
            </div>
        </div>
    );
}

export default Export;