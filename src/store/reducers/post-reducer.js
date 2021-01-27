import { v4 as uuidv4} from 'uuid';

const initialState={
    posts:[
        {
            id:uuidv4(),
            title:'About Cappuchino ',
            body: ' lorem lorem lorem lorem lorem lorem'
       },
        {
            id:uuidv4(),
            title:'About Espresso ',
            body: ' lorem lorem lorem lorem lorem lorem'
       },
      {
            id:uuidv4(),
            title:'About NesCafe ',
            body: ' lorem lorem lorem lorem lorem lorem'
     }
    ]
}

const PostsReducer=(state=initialState, action)=>{
    switch (action.type) {
       
         case 'addPost':{
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
         case 'deletePost':{
         
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
         case 'updatePost': {
           
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