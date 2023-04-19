import {userApi} from "../api/api";

const SET_CURRENT_USER = "SET_CURRENT_USER"

let initialState = {
    currentUser: {
        username: "",
        role: "",
        restaurantId: 0
    }
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
                        dispatch(setCurrentUser(data.data));
                    });
            });
    };
}

export const register = (username, password) => {
    return () => {
        userApi.register(username, password)
            .then(() => {
            });
    };
}

export const setCurrentUser = (user) => {
    return {type: SET_CURRENT_USER, user};
}

export default userReducer;