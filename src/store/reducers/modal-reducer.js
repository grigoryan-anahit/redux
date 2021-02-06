import {CLOSE_MODAL , OPEN_MODAL} from '../actionTypes';
const initialState = {
    isModalOpen: false,
    isOpenEditPostModal: false,
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
                isModalOpen: true,
            }

        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isModalOpen: false,
            }

        }
        default: return state;
    }
}

export default modalReducer;