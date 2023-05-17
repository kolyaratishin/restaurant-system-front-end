const UPLOAD_ERROR = "UPLOAD_ERROR";
const EXPORT_ERROR = "EXPORT_ERROR";
const CLEAR_UPLOAD_ERROR = "CLEAR_UPLOAD_ERROR";
const CLEAR_EXPORT_ERROR = "CLEAR_EXPORT_ERROR";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";


let initialState = {
    uploadError: null,
    exportError: null,
    loginError: false,
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_ERROR: {
            return {...state, uploadError: action.error}
        }
        case EXPORT_ERROR: {
            return {...state, exportError: action.error}
        }
        case CLEAR_UPLOAD_ERROR: {
            return {...state, uploadError: null}
        }
        case CLEAR_EXPORT_ERROR: {
            return {...state, exportError: null}
        }
        case SET_LOGIN_ERROR:{
            debugger
            return {...state, loginError: action.showError}
        }
        default:
            return state;
    }
}

export const setUploadError = (error) => {
    return {type: UPLOAD_ERROR, error};
}

export const setExportError = (error) => {
    return {type: EXPORT_ERROR, error};
}

export const clearUploadError = () => {
    return (dispatch) => {
        dispatch(clearUploadErrorAC());
    }
}

const clearUploadErrorAC = () => {
    return {type: CLEAR_UPLOAD_ERROR};
}

export const clearExportError = () => {
    return (dispatch) => {
        dispatch(clearExportErrorAC());
    }
}

const clearExportErrorAC = () => {
    return {type: CLEAR_EXPORT_ERROR};
}

export const setLoginError = (showError) => {
    return {type: SET_LOGIN_ERROR, showError};
}

export default errorReducer;