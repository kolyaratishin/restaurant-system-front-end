import Import from "./Import/Import";

function ImportExport() {
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Отримуємо перший вибраний файл
        const formData = new FormData(); // Створюємо об'єкт FormData для відправки файлу на сервер
        formData.append('file', file);
        debugger
    }

    return (
        <div>
            <Import/>
        </div>
    );
}

export default ImportExport;