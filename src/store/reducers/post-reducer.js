import { v4 as uuidv4} from 'uuid';
import { ADD_POST,UPDATE_POST,SET_POST,DELETE_POST} from '../actionTypes';

const initialState={
    posts:[]
}

const PostsReducer=(state=initialState, action)=>{
    switch (action.type) {
         case SET_POST:{
             const {posts}=action;
             return {
                 ...state,
                 posts
             }
         }
         case ADD_POST:{
             const posts=[...state.posts];
           
             posts.push(
                 {
                     id:uuidv4(),
                     title:action.title,
                     body:action.body,
                 }
             )
            return{ 
                 ...state,
                posts:posts
               
                  }
            
         }
         case DELETE_POST:{
         
            let posts = [...state.posts]; 
             console.log('ok');
            // const idx = posts.findIndex(post => post.id === action.id);
            // posts.splice(idx, 1);
            posts = posts.filter(post => post.id !== action.id);
            return {
                ...state,
                posts

            }    
            
         }
         case UPDATE_POST: {
           
             // {
             //     id:1,
             //     title:sdksdp,
             //     body:'sdfdfd'
             // }
             if(!action.post) 
                 return state;
                 let posts=[...state.posts];
             // posts = posts.filter(post => post.id !== action.post.id);
             // posts.push(action.post);
       
             const idx = posts.findIndex(post => post.id === action.post.id);
             posts.splice(idx, 1, action.post);
            
            return{
                 ...state,
                    posts
                 }
         
         }
         default:return state;
        }
}
export default PostsReducer;