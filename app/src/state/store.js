import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import tableReducer from "./table-reducer";
import receiptReducer from "./receipt-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import userReducer from "./user-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
    tablesPage: tableReducer,
    receiptPage: receiptReducer,
    user: userReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;