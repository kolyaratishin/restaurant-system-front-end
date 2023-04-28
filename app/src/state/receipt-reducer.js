import {receiptApi} from "../api/api";

const SET_CURRENT_RECEIPT = "SET_CURRENT_RECEIPT"
const DELETE_MEALS_FROM_RECEIPT = "DELETE_MEALS_FROM_RECEIPT"

let initialState = {
    currentReceipt: {
        id: 0,
        meals: [],
        totalPrice: 0
    }
}

const receiptReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_RECEIPT:
            return {...state, currentReceipt: action.currentReceipt};
        case DELETE_MEALS_FROM_RECEIPT:
            const newReceipts = clearMealsFromReceipt(state);
            return {...state, receipts: [...newReceipts]};
        default:
            return state;
    }
}

export const getReceiptById = (receiptId) => {
    return (dispatch) => {
        receiptApi.getReceiptById(receiptId)
            .then(data => {
                dispatch(setCurrentReceipt(data.data))
            });
    }
}

export const countReceipt = (currentReceipt) => {
    return (dispatch) => {
        receiptApi.countReceipt(currentReceipt.id)
            .then(order => {
                console.log(order);
                dispatch(setCurrentReceipt({...currentReceipt, meals: [], totalPrice: 0}));
            })
    }
}

const setCurrentReceipt = (currentReceipt) => {
    return {type: SET_CURRENT_RECEIPT, currentReceipt: {...currentReceipt}};
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

export const addMealToReceipt = (meal, receiptId) => {
    return (dispatch) => {
        receiptApi.addMealToReceipt(meal.id, receiptId)
            .then(data => {
                dispatch(setCurrentReceipt(data.data));
            })
    }
}

export const removeMealFromReceipt = (meal, receiptId) => {
    return (dispatch) => {
        receiptApi.deleteMealFromReceipt(meal.id, receiptId)
            .then(data => {
                dispatch(setCurrentReceipt(data.data));
            })
    }
}

export const updateMealAmount = (receiptId, mealId, amount) => {
    return (dispatch) => {
        receiptApi.updateMealAmount(receiptId, mealId, amount)
            .then(data => {
                dispatch(setCurrentReceipt(data.data));
            })
    }
}

export default receiptReducer;