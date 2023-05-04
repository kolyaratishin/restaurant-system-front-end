import classes from "./Import.module.css";
import {useEffect} from "react";

function Import(props) {
    const showImportSuccess = props.showImportSuccess;

    useEffect(() => {
        if (showImportSuccess) {
            const timer = setTimeout(() => {
                props.stopDisplayImportSuccess();
            }, 5000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [props, showImportSuccess]);

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Отримуємо перший вибраний файл
        const formData = new FormData(); // Створюємо об'єкт FormData для відправки файлу на сервер
        formData.append('file', file);
        props.importMenuFromFile(formData, props.restaurantId);
        event.target.value = null;
    }
    const uploadError = props.uploadError;
    return (
        <div className={classes.import_content}>
            <h3 className={classes.import_caption}>
                Виберіть файл для імпорту даних в меню
            </h3>
            <div className={classes.import}>
                <input type="file" onChange={handleFileChange}/>
            </div>
            {showImportSuccess ? <span className={classes.upload_success}>Імпорт даних в меню був успішний</span> : ""}
            {uploadError ? <span className={classes.upload_error}>{uploadError}</span> : ""}
        </div>
    );
}

export default Import;