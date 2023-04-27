import classes from "./Employees.module.css";
import Employee from "./Employee/Emloyee";
import EmployeeAddForm from "./EmployeeAddForm/EmployeeAddForm";
import {Navigate} from "react-router-dom";

function Employees(props) {
    if (!props.currentUser.isAuth){
        return <Navigate to={"/login"}/>
    }
    const employees = props.employees;

    const addEmployee = (values) => {
        const employee = {
            username: values.username,
            password: values.password,
            fullName: values.fullName
        };
        props.addEmployee(employee, props.adminUsername);
    }

    return (
        <div className={classes.employee_content}>
            <div className={classes.employees}>
                <table className={classes.employee_table}>
                    <caption>Список працівників</caption>
                    <tr>
                        <th>Логін</th>
                        <th>Пароль</th>
                        <th>Повне ім'я</th>
                    </tr>
                    {employees.map(employee => <Employee id={employee.id} username={employee.username}
                                                         password={employee.password}
                                                         fullName={employee.fullName}
                                                         removeEmployee={props.removeEmployee}/>)}
                </table>
            </div>
            <div className={classes.employee_form}>
                <p className={classes.employee_form_caption}>ДОДАТИ НОВОГО ПРАЦІВНИКА</p>
                <EmployeeAddForm onSubmit={addEmployee}/>
            </div>
        </div>
    );
}

export default Employees;