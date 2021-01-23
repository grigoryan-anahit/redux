
const initialState={
    isModalOpen:false
}

const ModalReducer=(state=initialState, action)=>{
    switch (action.type) {
      case 'openModal':{
        return {
            state, 
            isModalOpen:true
        }
           
    }
    case 'closeModal':{
        return {
            state,
            isModalOpen:false
            }
        }
        default :return state;
    }
}
export default ModalReducer;