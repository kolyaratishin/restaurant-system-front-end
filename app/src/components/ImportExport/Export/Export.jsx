import classes from "./Export.module.css";

function Export(props) {
    const onDownloadButtonClick = () => {
        props.exportMenuToFile(props.restaurantId);
    }

    const uploadError = props.uploadError;

    return (
        <div className={classes.export_content}>
            <h3 className={classes.export_caption}>
                Нажміть щоб експортувати дані у файл
            </h3>
            <div className={classes.download_button}>
                <button onClick={onDownloadButtonClick}>Заважнтажити</button>
            </div>
            {uploadError ? <span className={classes.export_error}>{uploadError}</span> : ""}
        </div>
    );
}

export default Export;