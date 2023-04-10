import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import tableReducer from "./table-reducer";
import receiptReducer from "./receipt-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    menuPage: menuReducer,
    tablesPage: tableReducer,
    receiptPage: receiptReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;