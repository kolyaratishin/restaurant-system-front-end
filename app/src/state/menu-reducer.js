import {importApi, menuApi} from "../api/api";

const ADD_MEAL_TO_MENU = "ADD_MEAL_TO_MENU"
const SET_MENU_GROUPS = "SET_MENU_GROUPS"

let initialState = {
    menuGroups: [
        {
            id: 0,
            name: "",
            menu: [

            ]
        }
    ]
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEAL_TO_MENU:
            const newMenu = [...state.menu];
            newMenu.push(action.meal);
            return {...state, menu: newMenu};
        case SET_MENU_GROUPS:
            return {...state, menuGroups: [...action.menuGroups]}
        default:
            return state;
    }
}

export const addMealToMenu = (meal) => {
    return (dispatch) => {
        //make api request
        dispatch(addMeal(meal));
    }
}

const addMeal = (meal) => {
    return {type: ADD_MEAL_TO_MENU, meal};
}
export const getMenuGroups = (restaurantId) => {
    return (dispatch) => {
        menuApi.getAll(restaurantId)
            .then(data => {
                dispatch(setMenuGroups(data.data));
            })
    }
}


const setMenuGroups = (menuGroups) => {
    return {type: SET_MENU_GROUPS, menuGroups};
}

export const importMenuFromFile = (formData, restaurantId) => {
    return (dispatch) => {
        importApi.import(formData)
            .then(() => {
                menuApi.getAll(restaurantId)
                    .then(data => {
                        dispatch(setMenuGroups(data));
                    })
            })
    }
}

export default menuReducer;