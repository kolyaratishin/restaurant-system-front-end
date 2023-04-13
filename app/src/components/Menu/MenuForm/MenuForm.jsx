import {Field, reduxForm} from "redux-form";
import classes from "./MenuForm.module.css";
import {requiredField} from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormsControls/FormControls";

function MenuForm(props) {
    const menuGroups = props.menuGroups;
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <p className={classes.input_name}>Назва</p>
                <Field component={Textarea} name="name" placeholder="Введіть ім'я продукту" validate={[requiredField]}/>
                <p className={classes.input_name}>Ціна</p>
                <Field component={Textarea} name="price" placeholder="Введіть ціну продукту"
                       validate={[requiredField]}/>
                <p className={classes.input_name}>Розмір</p>
                <Field component={Textarea} name="size" placeholder="Введіть розмір продукту"
                       validate={[requiredField]}/>
                <p className={classes.input_name}>Виберіть групу</p>
                <Field component="select" name="mealGroupId" validate={[requiredField]}>
                    {menuGroups.map(group => <option value={group.id}>{group.name}</option>)}
                </Field>
            </div>
            <button className={classes.add_button}>Додати</button>
        </form>
    );
}

const MenuFormRedux = reduxForm({form: "menuForm"})(MenuForm);

export default MenuFormRedux;