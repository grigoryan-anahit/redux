import {
    ADD_POST,
    CLOSE_MODAL,
    DELETE_POST,
    OPEN_MODAL,
    SET_POSTS,
    UPDATE_POST,
    TOGGLE_OPEN_NAV
} from './actionTypes';




export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });
export const deletePostAC = (id) => ({ type: DELETE_POST, id: id });
export const openModalAC = () => ({ type: OPEN_MODAL });
export const closeModalAC = () => ({ type: CLOSE_MODAL });
export const updatePostAC = (post) => ({ type: UPDATE_POST, post: post });
export const setPostsAC = (posts) => ({ type: SET_POSTS, posts: posts });
export const toggleOpenNavAC = ()=> ({type:TOGGLE_OPEN_NAV});