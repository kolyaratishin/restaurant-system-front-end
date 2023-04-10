import {combineReducers, createStore} from "redux";
import menuReducer from "./table-reducer";

let reducers = combineReducers({
    menuPage: menuReducer
})

let store = createStore(reducers);

window.store = store;

export default store;