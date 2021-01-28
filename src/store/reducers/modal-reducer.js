import { OPEN_MODAL, CLOSE_MODAL} from '../actionTypes';

const initialState={
    isModalOpen:false
}

const ModalReducer=(state=initialState, action)=>{
    switch (action.type) {
      case OPEN_MODAL:{
        return {
            state, 
            isModalOpen:true
        }
           
    }
    case CLOSE_MODAL:{
        return {
            ...state,
            isModalOpen:false
            }
        }
        default :return state;
    }
}
export default ModalReducer;