import {Field, reduxForm} from "redux-form";


function MenuForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name="name" placeholder="Введіть ім'я продукту"/>
                <Field component={"textarea"} name="price" placeholder="Введіть ціну продукту"/>
                <Field component={"textarea"} name="size" placeholder="Введіть розмір продукту"/>
            </div>
            <button>Додати</button>
        </form>
    );
}

const MenuFormRedux = reduxForm({form: "menuForm"})(MenuForm);

export default MenuFormRedux;