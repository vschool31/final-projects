const initState = {};

const themesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_THEME':
            return state;
        default:
            return state;
    }
};

export default themesReducer;