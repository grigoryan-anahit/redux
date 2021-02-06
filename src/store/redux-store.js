import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import postsReducer from './reducers/posts-reducer';
import modalReducer from './reducers/modal-reducer';
import navReducer from './reducers/nav-reducer';
const reducers = combineReducers({
    postsState: postsReducer,
    modalState: modalReducer,
    navState: navReducer,
    form:formReducer
})
const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));
window.store = store;
//store.dispatch({})
//store.getState()
export default store;
