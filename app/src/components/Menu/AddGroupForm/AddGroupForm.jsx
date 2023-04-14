import {Field, reduxForm} from "redux-form";
import classes from "./AddGroupForm.module.css";
import {requiredField} from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormsControls/FormControls";

function AddGroupForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <p className={classes.input_name}>Назва</p>
                <Field component={Textarea} name="groupName" placeholder="Введіть ім'я групи"
                       validate={[requiredField]}/>
            </div>
            <button className={classes.add_button}>Додати</button>
        </form>
    );
}

const AddGroupFormRedux = reduxForm({form: "addGroupForm"})(AddGroupForm);

export default AddGroupFormRedux;