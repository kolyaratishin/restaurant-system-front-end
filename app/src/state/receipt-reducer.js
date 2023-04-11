const SET_CURRENT_RECEIPT = "SET_CURRENT_RECEIPT"
const DELETE_MEALS_FROM_RECEIPT = "DELETE_MEALS_FROM_RECEIPT"
const ADD_MEAL = "ADD_MEAL"

let initialState = {
    receipts: [
        {
            id: 1, meals: [],
            totalPrice: 0
        },
        {
            id: 2, meals: [],
            totalPrice: 0
        },
    ],
    currentReceipt: null
}

const receiptReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_RECEIPT:
            return {...state, currentReceipt: action.currentReceipt};
        case DELETE_MEALS_FROM_RECEIPT:
            const newReceipts = clearMealsFromReceipt(state);
            return {...state, receipts: [...newReceipts]};
        case ADD_MEAL:
            const currentReceipt = state.currentReceipt;
            const currentReceiptId = currentReceipt.id;
            const newCurrentReceiptMeals = addMealToCurrentReceipt(action.meal, currentReceipt)
            const receipts = addMealToReceipts(action.meal, currentReceiptId, state.receipts);
            return {...state, receipts: receipts, currentReceipt: {...currentReceipt, meals: newCurrentReceiptMeals}};
        default:
            return state;
    }
}

export const getReceiptById = (receiptId) => {
    return (dispatch) => {
        const currentReceipt = initialState.receipts.find(receipt => receipt.id === receiptId);
        dispatch(setCurrentReceipt(currentReceipt));
    }
}

export const countReceipt = () => {
    return (dispatch) => {
        //make api request
        dispatch(deleteMealsFromReceipt());
        dispatch(setCurrentReceipt(null));
    }
}

const setCurrentReceipt = (currentReceipt) => {
    return {type: SET_CURRENT_RECEIPT, currentReceipt: {...currentReceipt}};
}

const deleteMealsFromReceipt = () => {
    return {type: DELETE_MEALS_FROM_RECEIPT};
}

const clearMealsFromReceipt = (state) => {
    let newReceipts = [...state.receipts];

    let receiptId = newReceipts.findIndex(meal => meal.id === state.currentReceipt.id);
    if (receiptId > -1) {
        newReceipts[receiptId].meals = [];
        newReceipts[receiptId].totalPrice = 0;
    }
    return newReceipts;
}

export const addMealToReceipt = (meal) => {
    return (dispatch) => {
        //make api request
        dispatch(addMeal(meal));
    }
}

const addMeal = (meal) => {
    return {type: ADD_MEAL, meal};
}

const addMealToCurrentReceipt = (meal, currentReceipt) => {
    const newMeals = [...currentReceipt.meals];
    newMeals.push(meal);
    return newMeals;
}

const addMealToReceipts = (meal, currentReceiptId, receipts) => {
    let newReceipts = [...receipts];

    let receiptId = newReceipts.findIndex(meal => meal.id === currentReceiptId);
    if (receiptId > -1) {
        newReceipts[receiptId].meals.push(meal);
        newReceipts[receiptId].totalPrice = 0;
    }
    return newReceipts;
}

export default receiptReducer;