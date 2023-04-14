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
        case ADD_MEAL_TO_MENU: {
            const newMenuGroups = [...state.menuGroups];
            const actionData = action.meal.data;
            const mealGroupId = actionData.mealGroupId;
            let mealGroupIdFromState = newMenuGroups.findIndex(menuGroup => menuGroup.id === mealGroupId);
            if (mealGroupIdFromState > -1) {
                newMenuGroups[mealGroupIdFromState].menu.push({
                    id: actionData.id,
                    name: actionData.name,
                    price: actionData.price,
                });
            }
            return {...state, menuGroups: [...newMenuGroups]}
        }
        case SET_MENU_GROUPS:
            return {...state, menuGroups: [...action.menuGroups]}
        default:
            return state;
    }
}

export const addMealToMenu = (meal) => {
    return (dispatch) => {
        menuApi.save(meal)
            .then(data => {
                dispatch(addMeal(data));
            });

    }
}

const addMeal = (meal) => {
    return {type: ADD_MEAL_TO_MENU, meal};
}
export const getMenuGroups = (restaurantId) => {
    return (dispatch) => {
        getAllMenuGroups(restaurantId, dispatch);
    }
}


const setMenuGroups = (menuGroups) => {
    return {type: SET_MENU_GROUPS, menuGroups};
}

export const importMenuFromFile = (formData, restaurantId) => {
    return (dispatch) => {
        importApi.import(formData)
            .then(() => {
                getAllMenuGroups(restaurantId, dispatch);
            })
    }
}

export const removeMealFromMenuGroup = (menuGroupId, mealId) => {
    return (dispatch) => {
        menuApi.getMealGroupById(menuGroupId)
            .then(mealGroup => {
                return mealGroup.data.restaurantId;
            })
            .then(restaurantId => {
                menuApi.removeMealFromMenuGroup(menuGroupId, mealId)
                    .then(() => {
                        getAllMenuGroups(restaurantId, dispatch);
                    })
            })
    }
}

const getAllMenuGroups = (restaurantId, dispatch) => {
    menuApi.getAll(restaurantId)
        .then(data => {
            dispatch(setMenuGroups(data.data));
        })
}

export default menuReducer;