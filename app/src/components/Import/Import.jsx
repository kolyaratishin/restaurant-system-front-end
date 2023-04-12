function Import() {
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Отримуємо перший вибраний файл
        const formData = new FormData(); // Створюємо об'єкт FormData для відправки файлу на сервер
        formData.append('file', file);
        debugger
    }

    return (
        <div>
            <div>
                Виберіть файл для імпорту даних в меню
            </div>
            <div>
                <input type="file" onChange={handleFileChange}/>
            </div>
        </div>
    );
}

export default Import;