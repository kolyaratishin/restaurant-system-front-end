import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import tableReducer from "./table-reducer";
import receiptReducer from "./receipt-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import userReducer from "./user-reducer";
import employeeReducer from "./employee-reducer";
import errorReducer from "./error-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
    tablesPage: tableReducer,
    receiptPage: receiptReducer,
    user: userReducer,
    employeePage: employeeReducer,
    errors: errorReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;