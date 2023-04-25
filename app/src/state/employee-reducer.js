import {employeeApi} from "../api/api";

const SET_EMPLOYEES = "SET_EMPLOYEES";
const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";

let initialState = {
    employees: []
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES: {
            return {...state, employees: [...action.employees]}
        }
        case ADD_EMPLOYEE: {
            const employees = [...state.employees];
            employees.push(action.employee);
            return {...state, employees: [...employees]};
        }
        case REMOVE_EMPLOYEE: {
            const employees = [...state.employees].filter(employee => employee.id !== action.id);
            return {...state, employees: [...employees]};
        }
        default:
            return state;
    }
}

export const getEmployees = (adminUsername) => {
    return (dispatch) => {
        employeeApi.getAllEmployees(adminUsername)
            .then(response => {
                dispatch(setEmployees(response.data));
            })
    }
}

export const addEmployee = (employee, adminUsername) => {
    return (dispatch) => {
        employeeApi.addEmployee(employee, adminUsername)
            .then(response => {
                dispatch(addEmployeeAC(response.data));
            })
    }
}

export const removeEmployee = (id) => {
    return (dispatch) => {
        employeeApi.removeUser(id)
            .then(() => {
                dispatch(removeEmployeeAC(id))
            })
    }
}

const setEmployees = (employees) => {
    return {type: SET_EMPLOYEES, employees}
}
const addEmployeeAC = (employee) => {
    return {type: ADD_EMPLOYEE, employee}
}

const removeEmployeeAC = (id) => {
    return {type: REMOVE_EMPLOYEE, id}
}

export default employeeReducer;