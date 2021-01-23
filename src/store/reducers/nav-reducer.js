

const initialState={
    isNav:false
    
}
const NavReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'toggleNavOpen':{
                return  {
                    state,
                   isNav:!this.state.navbar.isNav
                }
            }
            default:return state;
        }
          
}
export default NavReducer;
  
        