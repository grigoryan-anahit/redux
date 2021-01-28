import { ADD_POST,
    DELETE_POST,
    OPEN_MODAL,
    CLOSE_MODAL,
    UPDATE_POST,
    SET_POST,
    TOGGLE_NAV_OPEN} 
    from './actionTypes';

export const addPostAC=(title,body)=>({type:ADD_POST, title:title,body:body});
export const deletePostAC=(id)=>({type:DELETE_POST,id:id});
export const openModalAC=()=>({type:OPEN_MODAL});
export const closeModalAC=()=>({type:CLOSE_MODAL});
export const updatePostAC=(post)=>({type:UPDATE_POST, post:post});
export const setPostAC=(posts)=>({type:SET_POST,posts:posts});
export const toggleNavOpenAC=()=>({type:TOGGLE_NAV_OPEN});
