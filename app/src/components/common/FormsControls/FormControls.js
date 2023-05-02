import classes from "./FormControls.module.css";

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    const handleInputChange = (e) => {
        const {value} = e.target;
        const regexp = new RegExp(props.regExp);
        if (regexp) {
            if (regexp.test(value) || value.length === 0)
                input.onChange(value);
        }
        else {
            input.onChange(value);
        }
    };

    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props} onChange={handleInputChange}/>
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