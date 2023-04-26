import {Field, reduxForm} from "redux-form";
import classes from "./TableForm.module.css";
import {requiredField} from "../../../../utils/validators/validators"
import {Textarea} from "../../../common/FormsControls/FormControls";
import AddButton from "../../../common/Buttons/AddButton/AddButton";

function TableForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <p className={classes.input_name}>Назва</p>
                <Field component={Textarea} name="tableName" placeholder="Введіть назву стола"
                       validate={[requiredField]}/>
            </div>
            <AddButton/>
        </form>
    );
}

const AddGroupFormRedux = reduxForm({form: "tableForm"})(TableForm);

export default AddGroupFormRedux;