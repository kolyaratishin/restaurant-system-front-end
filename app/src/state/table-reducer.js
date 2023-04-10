let initialState = {
    tables: [
        {id: 1, name: "Стіл 1", status: "FREE"},
        {id: 2, name: "Стіл 2", status: "FREE"},
        {id: 3, name: "Стіл 3", status: "FREE"},
        {id: 4, name: "Стіл 4", status: "FREE"},
    ]
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default tableReducer;