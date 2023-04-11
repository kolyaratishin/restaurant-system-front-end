const ADD_MEAL_TO_MENU = "ADD_MEAL_TO_MENU"

let initialState = {
    menu: [
        {id: 1, name: "Піца", price: 160.00, size:"500г"},
        {id: 2, name: "Піца 2", price: 170.00, size:"600г"},
        {id: 3, name: "Піца 3", price: 180.00, size:"700г"},
        {id: 4, name: "Піца 3", price: 190.00, size:"800г"},
    ]
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEAL_TO_MENU:
            const newMenu = [...state.menu];
            newMenu.push(action.meal);
            return {...state, menu: newMenu};
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

export default menuReducer;