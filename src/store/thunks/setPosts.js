import { setPostsAC } from '../actionCreators';
const setPosts = () => {
    return function (dispatch) {
        (async function getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(setPostsAC(data));
        })();
    }

}

export default setPosts;