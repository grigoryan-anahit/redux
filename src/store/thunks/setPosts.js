import {setPostAC} from '../actionCreators';
const setPosts=()=>{
    return function(dispatch){
        (async function getPost(){
                    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
                    const data=await response.json();
                   setPosts(data);
                   dispatch(setPostAC(data));
                })();
                
    }
}
export default setPosts;