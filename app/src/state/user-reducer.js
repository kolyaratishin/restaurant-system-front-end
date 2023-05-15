import {userApi} from "../api/api";

const SET_CURRENT_USER = "SET_CURRENT_USER"

const emptyUser = {
    username: "",
        role: "",
        restaurantId: 0,
        isAuth: false
}
let initialState = {
    currentUser: emptyUser
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return {...state, currentUser: {...action.user}}
        }
        default:
            return state;
    }
}

export const login = (username, password) => {
    return (dispatch) => {
        userApi.login(username, password)
            .then(() => {
                userApi.getUserByUsername(username)
                    .then(data => {
                        const response = data.data;
                        response.isAuth = true;
                        dispatch(setCurrentUser(response));
                    });
            });
    };
}


export const setCurrentUser = (user) => {
    return {type: SET_CURRENT_USER, user};
}

export const logout = () => {
    return (dispatch) => {
        dispatch(setCurrentUser(emptyUser));
    };
}

export default userReducer;