import { combineReducers } from "redux";


const testNumIS = 0;
const testNum = (state = testNumIS, action) => {
    switch (action.type) {
        case 'GET_THEME':
            return state;
        default:
            return state;
    }
};

const learning = combineReducers({
    test_num: testNum
});

export default learning;