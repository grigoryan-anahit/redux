import {TOGGLE_OPEN_NAV} from '../actionTypes';
const initialState = {
    isNav: false,
}

const navReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_OPEN_NAV: {
            return {
                ...state,
                isNav: !state.isNav
            }
        }
        default: return state;
    }
}

export default navReducer;