import {TOGGLE_NAV_OPEN} from '../actionTypes';

const initialState={
    isNav:false
    
}
const NavReducer=(state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_NAV_OPEN:{
                return  {
                    ...state,
                   isNav:!state.isNav
                }
            }
            default:return state;
        }
          
}
export default NavReducer;
  
        