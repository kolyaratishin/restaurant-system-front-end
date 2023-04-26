import {tableApi} from "../api/api";

const SET_TABLES = "SET_TABLES"
const ADD_TABLE = "ADD_TABLE"
const SET_CURRENT_TABLE = "SET_CURRENT_TABLE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    tables: [

    ],
    currentTable: {}
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLES:
            return {...state, tables: action.tables}
        case ADD_TABLE:
            const newTables = [...state.tables];
            newTables.push(action.table);
            return {...state, tables: [...newTables]};
        case SET_CURRENT_TABLE:{
            return {...state, currentTable: {...action.table}};
        }
        case SET_STATUS: {
            const newTables = [...state.tables];
            const index = newTables.findIndex(table => table.id === action.table.id);
            if(index > -1){
                newTables[index] = action.table;
            }
            return {...state, tables: [...newTables], currentTable: {...action.table}};
        }
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

export const getCurrentTableById = (id) => {
    return (dispatch) => {
        tableApi.getTableById(id)
            .then(data => {
                dispatch(setCurrentTable(data.data));
            })
    }
}

export const setCurrentTable = (table) => {
    return {type: SET_CURRENT_TABLE, table};
}

export const setStatus = (status, tableId) => {
    return (dispatch) => {
        tableApi.changeStatus(status, tableId)
            .then(data => {
                dispatch(setStatusAC(data.data));
            })
    }
}

export const setStatusAC = (table) => {
    return {type: SET_STATUS, table};
}

export default tableReducer;