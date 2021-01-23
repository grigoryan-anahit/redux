import Style from './posts.module.css';
import React from 'react';
import { dispatch } from "../../store/store";
import Post from "./post";
import Modal from '../../components/modal';
import EditPage from './editPage';

class Posts extends React.Component {
    state = {
        inputs: {
            title: {
                touched: false,
                valid: true,
                value: ''
            },
            body: {
                touched: false,
                valid: true,
                value: ''
            }
        },
        editablePost: null,
        editInputs: {
            title: {
                touched: false,
                valid: true,
                value: ''
            },
            body: {
                touched: false,
                valid: true,
                value: ''
            }
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        const inputFor = e.target.dataset.input;
        let whichForm = null;
        if (inputFor === 'newPost') {
            whichForm = 'inputs'
        }
        else if (inputFor === 'editPost') {
            whichForm = 'editInputs'
        }
        this.setState(prevState => ({
            ...prevState,
            [whichForm]: {
                ...prevState[whichForm],
                [name]: {
                    touched: true,
                    valid: true,
                    value
                }
            }
        }))
    }

    handleEditPost = (e, id) => {
      
        e.preventDefault();
        const updatedPost = {
            id,
            title: this.state.editInputs.title.value,
            body: this.state.editInputs.body.value
        }
        dispatch({ type: 'updatePost', post: updatedPost })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { title, body } = this.state.inputs
        if (
            title.value.length < 1 ||
            body.value.length < 1
        ) return;

        const action = {
            type: 'addPost',
            title: title.value,
            body: body.value
        }
        dispatch(action);
        this.setState(prevState => ({
            ...prevState,
            inputs: {
                title: {
                    ...prevState.inputs.title,
                    value: ''
                },
                body: {
                    ...prevState.inputs.body,
                    value: ''
                }
            }
        }))
    }

    setEditablePost = (editPost) => {
        this.setState({
            editablePost:editPost
        }, ()=>{
            dispatch({ type: 'openModal' })
        }
        )
    }
   
      
    render() {
        console.log('render');
        const { posts, isModalOpen } = this.props;
        const Posts = posts.map(post => {
            return (
                <Post post={post} key={post.id} setEditablePost={this.setEditablePost}
                />  
            )
        })


        return (
            <>
                <div>
                    <h1>Posts Page</h1>
                    <form action="#" className={Style.addPostForm}>
                        <input className={Style.addPostFormComp}
                            type="text"
                            name="title"
                            placeholder="enter the title of your post"
                            data-input='newPost'
                            value={this.state.inputs.title.value}
                            onChange={this.handleChange}
                        />

                        <textarea className={Style.addPostFormComp}
                            type="text"
                            name='body'
                            rows="10"
                            style={{ resize: 'none' }}
                            placeholder="enter the body of your post"
                            data-input='newPost'
                            value={this.state.inputs.body.value}
                            onChange={this.handleChange}
                        />


                        <button className={Style.addPostFormComp} type="submit" onClick={this.handleSubmit}>Add</button>
                    </form>
                    <div className={Style.postsWrapper}>
                        {Posts}
                    </div>
                </div>
                {
                    this.state.editablePost &&
                    isModalOpen && <Modal>
                        <EditPage post={this.state.editablePost} handleChange={this.handleChange} handleEditPost={this.handleEditPost}/>
                    </Modal>
                }
            </>
        )
    }
}
export default Posts;