import {createStore, combineReducers} from "redux"; 
import PostsReducer from './reducers/post-reducer';
import NavReducer from './reducers/nav-reducer';
import ModalReducer from './reducers/modal-reducer';

const reducers=combineReducers({
    postsState:PostsReducer,
    navState:NavReducer,
    modalState:ModalReducer
})

const store = createStore(reducers);
window.store=store;
//store.dispatch({})
//store.getState()
export default store;