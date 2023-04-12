import {tableApi} from "../api/api";

const SET_TABLES = "SET_TABLES"

let initialState = {
    tables: [
        {id: 1, name: "Стіл 1", status: "FREE"},
        {id: 2, name: "Стіл 2", status: "FREE"},
        {id: 3, name: "Стіл 3", status: "FREE"},
        {id: 4, name: "Стіл 4", status: "FREE"},
    ]
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLES:
            return {...state, tables: action.tables}
        default:
            return state;
    }
}

export const getTables = (restaurantId) => {
    return (dispatch) => {
        tableApi.getAll(restaurantId)
            .then(data => {
                dispatch(setTables(data.data));
            })
    }
}

const setTables = (tables) => {
    return {type: SET_TABLES, tables};
}

export default tableReducer;