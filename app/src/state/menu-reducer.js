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
        default:
            return state;
    }
}

export default menuReducer;