import {combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import tableReducer from "./table-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
    tablesPage: tableReducer
})

let store = createStore(reducers);

window.store = store;

export default store;