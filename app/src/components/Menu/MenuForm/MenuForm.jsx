import {Field, reduxForm} from "redux-form";
import classes from "./MenuForm.module.css";
import {requiredField} from "../../../utils/validators/validators"
import {Select, Textarea} from "../../common/FormsControls/FormControls";
import AddButton from "../../common/Buttons/AddButton/AddButton";

function MenuForm(props) {
    const menuGroups = props.menuGroups;
    return (
        <form onSubmit={props.handleSubmit} className={classes.form_container}>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Назва</p>
                <Field component={Textarea} name="name" placeholder="Введіть ім'я продукту"
                       validate={[requiredField]}
                       className={classes.textarea}/>
            </div>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Ціна</p>
                <Field component={Textarea} name="price" placeholder="Введіть ціну продукту"
                       validate={[requiredField]}
                       className={classes.textarea}
                       regExp="^\d+(\.\d{0,2})?$"/>
            </div>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Розмір</p>
                <Field component={Textarea} name="size" placeholder="Введіть розмір продукту"
                       validate={[requiredField]}
                       className={classes.textarea}/>
            </div>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Виберіть групу</p>
                <Field className={classes.select} component={Select} name="mealGroupId" validate={[requiredField]}
                       menuGroups={menuGroups}/>
            </div>
            <AddButton/>
        </form>
    );
}

const MenuFormRedux = reduxForm({form: "menuForm"})(MenuForm);

export default MenuFormRedux;