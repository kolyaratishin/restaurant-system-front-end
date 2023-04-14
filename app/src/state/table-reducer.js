import {tableApi} from "../api/api";

const SET_TABLES = "SET_TABLES"

let initialState = {
    tables: [
        
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