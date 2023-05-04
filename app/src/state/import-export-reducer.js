import {importApi} from "../api/api";
import {clearExportError, clearUploadError, setExportError, setUploadError} from "./error-reducer";
import {saveAs} from 'file-saver';
import {getAllMenuGroups} from "./menu-reducer";

const SET_SHOW_IMPORT_SUCCESS = "SET_SHOW_IMPORT_SUCCESS";
const SET_SHOW_EXPORT_SUCCESS = "SET_SHOW_EXPORT_SUCCESS";

let initialState = {
    showSuccessImport: false,
    showSuccessExport: false
}

const importExportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_IMPORT_SUCCESS: {
            return {...state, showSuccessImport: action.value}
        }
        case SET_SHOW_EXPORT_SUCCESS: {
            return {...state, showSuccessExport: action.value}
        }
        default:
            return state;
    }
}

export const importMenuFromFile = (formData, restaurantId) => {
    return (dispatch) => {
        debugger
        importApi.import(formData, restaurantId)
            .then(() => {
                getAllMenuGroups(restaurantId, dispatch);
                dispatch(clearUploadError());
                dispatch(setShowImportSuccess(true))
            })
            .catch(error => {
                dispatch(setUploadError(error.response.data));
            })
    }
}

export const exportMenuToFile = (restaurantId) => {
    return (dispatch) => {
        importApi.export(restaurantId)
            .then((response) => {
                dispatch(clearExportError());
                const file = new Blob([response.data], {type: 'application/octet-stream'});
                saveAs(file, 'export.csv');
                dispatch(setShowExportSuccess(true));
            })
            .catch(error => {
                dispatch(setExportError(error));
            })
    }
}

const setShowImportSuccess = (value) => {
    return {type: SET_SHOW_IMPORT_SUCCESS, value}
}

const setShowExportSuccess = (value) => {
    return {type: SET_SHOW_EXPORT_SUCCESS, value}
}

export const stopDisplayImportSuccess = () => {
    return (dispatch) => {
       dispatch(setShowImportSuccess(false));
    }
}

export const stopDisplayExportSuccess = () => {
    return (dispatch) => {
        dispatch(setShowExportSuccess(false));
    }
}


export default importExportReducer;