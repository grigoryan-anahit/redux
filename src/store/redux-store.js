import {createStore, combineReducers, applyMiddleware} from "redux"; 
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import PostsReducer from './reducers/post-reducer';
import NavReducer from './reducers/nav-reducer';
import ModalReducer from './reducers/modal-reducer';

const reducers=combineReducers({
    postsState:PostsReducer,
    navState:NavReducer,
    modalState:ModalReducer,
    form:formReducer
})
const middleWares=[thunk];
const store = createStore(reducers,applyMiddleware(...middleWares));
window.store=store;
//store.dispatch({})
//store.getState()
export default store;