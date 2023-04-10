const SET_CURRENT_RECEIPT = "SET_CURRENT_RECEIPT"
const DELETE_MEALS_FROM_RECEIPT = "DELETE_MEALS_FROM_RECEIPT"

let initialState = {
    receipts: [
        {
            id: 1, meals: [
                {id: 1, name: "Піца", price: 160.00, amount: 1},
                {id: 2, name: "Піца", price: 160.00, amount: 1},
            ],
            totalPrice: 320
        },
        {
            id: 2, meals: [
                {id: 1, name: "Піца", price: 160.00, amount: 1},
                {id: 3, name: "Піца 3", price: 180.00, amount: 1},
            ],
            totalPrice: 340
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

export default receiptReducer;