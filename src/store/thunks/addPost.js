import { addPostActionCreator } from '../actionCreators';

const addPostThunk = (body, title) => {
    return (dispatch) => {
        (async function () {
            const newUser = {
                title,
                body,
                userId: 5
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            data.id = data.id + Math.random()
            dispatch(addPostActionCreator(data))
        })()
    }
}

export default addPostThunk;