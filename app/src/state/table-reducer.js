import {tableApi} from "../api/api";

const SET_TABLES = "SET_TABLES"
const ADD_TABLE = "ADD_TABLE"

let initialState = {
    tables: [

    ]
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLES:
            return {...state, tables: action.tables}
        case ADD_TABLE:
            const newTables = [...state.tables];
            newTables.push(action.table);
            return {...state, tables: [...newTables]};
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

export const addTable = (tableName, restaurantId) => {
    return (dispatch) => {
        tableApi.addTable(tableName, restaurantId)
            .then(data => {
                dispatch(addTableAC(data.data));
            })
    }
}
export const addTableAC = (table) => {
    return {type: ADD_TABLE, table};
}

export default tableReducer;