import style from './posts.module.css';
import React, { Component } from 'react';
import Post from './post';
import { dispatch } from '../../store/store';
import Modal from '../../components/modal';
import EditPage from './editPage';


class Posts extends Component {
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
        },
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        const inputFor = e.target.dataset.input;
        let whichForm = null;
        if (inputFor === 'newPost') {
            whichForm = 'inputs'
        } else if (inputFor === 'editPost') {
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

    setEditablePost = (editPost) => {
        this.setState({
            editablePost: editPost
        }, () => {
            dispatch({ type: 'openModal' })
        })



    }
    handleEditPost = (e ,id) => {
        e.preventDefault();
        const updatedPost = {
            id,
            title:this.state.editInputs.title.value,
            body:this.state.editInputs.body.value
        }
        dispatch({ type: 'updatePost', post: updatedPost })
        dispatch({type:'closeModal'})
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

    render() {
        const { posts, isModalOpen } = this.props;
        const Posts = posts.map(post => {
            return (
                <Post key={post.id}
                    post={post}
                    setEditablePost={this.setEditablePost}
                />
            )
        })

        return (
            <>
                <div>
                    <h1>Posts Page</h1>
                    <form action="#" className={style.addPostForm}>
                        <input
                            data-input="newPost"
                            type="text"
                            name="title"
                            placeholder="Post Title"
                            onChange={this.handleChange}
                            value={this.state.inputs.title.value}
                        />
                        <textarea
                            data-input="newPost"
                            name="body"
                            cols="20"
                            rows="10"
                            style={{ resize: "none" }}
                            placeholder="Post Message"
                            onChange={this.handleChange}
                            value={this.state.inputs.body.value}
                        />
                        <button type="submit" onClick={this.handleSubmit}>Add Post</button>
                    </form>
                    <div className={style.postsWrapper}>
                        {Posts}
                    </div>
                </div>

                {
                    this.state.editablePost &&
                    isModalOpen && <Modal>
                        <EditPage post={this.state.editablePost} handleChange={this.handleChange}  handleEditPost={this.handleEditPost}/>
                    </Modal>
                }
            </>
        )
    }
}

export default Posts;
