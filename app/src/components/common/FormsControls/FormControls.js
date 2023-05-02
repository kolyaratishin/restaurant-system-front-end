import classes from "./FormControls.module.css";

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}


        </div>
    );
}

export const Select = ({input, meta, ...props}) => {
    const menuGroups = props.menuGroups;

    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            <div>
                <select {...input} {...props}>
                    {menuGroups.map(group => <option value={group.id}>{group.name}</option>)}
                </select>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}