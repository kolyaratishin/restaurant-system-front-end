import {Field, reduxForm} from "redux-form";
import classes from "./AddGroupForm.module.css";
import {requiredField} from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormsControls/FormControls";
import AddButton from "../../common/Buttons/AddButton/AddButton";

function AddGroupForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.form_field}>
                <p className={classes.input_name}>Назва</p>
                <Field component={Textarea} name="groupName" placeholder="Введіть ім'я групи"
                       validate={[requiredField]} className={classes.textarea}/>
            </div>
            <AddButton/>
        </form>
    );
}

const AddGroupFormRedux = reduxForm({form: "addGroupForm"})(AddGroupForm);

export default AddGroupFormRedux;