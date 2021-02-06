import { v4 as uuidv4 } from 'uuid';
import { UPDATE_POST, SET_POSTS, DELETE_POST, ADD_POST } from '../actionTypes';

const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            const { posts } = action;
            return {
                ...state,
                posts
            }
        }
        case ADD_POST: {
            const posts = [...state.posts];
            posts.push(action.newPost)
            return {
                ...state,
                posts: posts
            }
        }
        case DELETE_POST: {
            let posts = [...state.posts];
            // const idx = posts.findIndex(post => post.id === action.id);
            // posts.splice(idx, 1);
            posts = posts.filter(post => post.id !== action.id);
            return {
                ...state,
                posts

            }
        }
        case UPDATE_POST: {
            if (!action.post)
                return state;
            let posts = [...state.posts];
            // posts = posts.filter(post => post.id !== action.post.id);
            // posts.push(action.post);
            const idx = posts.findIndex(post => post.id === action.post.id);
            posts.splice(idx, 1, action.post);
            return {
                ...state,
                posts
            }

        }

        default: return state;
    }
}



export default postsReducer;