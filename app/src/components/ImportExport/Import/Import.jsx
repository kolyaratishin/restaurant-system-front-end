import classes from "./Import.module.css";

function Import(props) {
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Отримуємо перший вибраний файл
        const formData = new FormData(); // Створюємо об'єкт FormData для відправки файлу на сервер
        formData.append('file', file);
        props.importMenuFromFile(formData, props.restaurantId);
    }

    return (
        <div className={classes.import_content}>
            <h3>
                Виберіть файл для імпорту даних в меню
            </h3>
            <div>
                <input type="file" onChange={handleFileChange}/>
            </div>
        </div>
    );
}

export default Import;