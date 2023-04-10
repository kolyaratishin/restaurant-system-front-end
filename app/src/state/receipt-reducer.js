const SET_CURRENT_RECEIPT = "SET_CURRENT_RECEIPT"

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

const setCurrentReceipt = (currentReceipt) => {
    return {type: SET_CURRENT_RECEIPT, currentReceipt: {...currentReceipt}};
}

export default receiptReducer;