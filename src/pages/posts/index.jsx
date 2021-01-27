import style from './posts.module.css';
import React, { Component } from 'react';
import Post from './post';
import {connect} from 'react-redux';
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
        const {openModal}=this.props;
      this.setState(prevState=>{
          return {
              ...prevState,
              editInputs:{
                  ...prevState.editInputs,
                   id:editPost.id,
                   title:{
                       ...this.state.editInputs.title,
                       value:editPost.title
                   },
                   body:{
                       ...this.state.editInputs.body,
                       value:editPost.body
                   }
              }
            }
          }, ()=>{
              openModal();
          
      })
        }
    handleEditPost = (e ,id) => {
        const {updatePost,closeModal}=this.props;
        e.preventDefault();
        const updatedPost = {
            id,
            title:this.state.editInputs.title.value,
            body:this.state.editInputs.body.value
        }
       updatePost(updatedPost);
       closeModal();
        this.setState(prevState=>{
            return {
                ...prevState,
                editInputs:{
                    id:'',
                    title:{
                        ...this.state.editInputs.title,
                        value:''
                    },
                    body:{
                        ...this.state.editInputs.body,
                        value:''
                    }
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, body } = this.state.inputs
        const {addPost}=this.props;
        if (
            title.value.length < 1 ||
            body.value.length < 1
        ) return 
            addPost(title.value,body.value);

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
        const { posts, isModalOpen ,deletePost, closeModal} = this.props;
        const Posts = posts.map(post => {
            return (
                <Post key={post.id}
                    post={post}
                    setEditablePost={this.setEditablePost}
                    deletePost={deletePost}
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
                    this.state.editInputs.id &&
                    isModalOpen && <Modal closeModal={closeModal}>
                        <EditPage
                                data={{
                                    title:this.state.editInputs.title.value,
                                    body: this.state.editInputs.body.value,
                                    id: this.state.editInputs.id
                                }} 
                                 handleChange={this.handleChange} 
                                  handleEditPost={this.handleEditPost}
                            />
                    </Modal>
                }
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        posts:state.postsState.posts,
        isModalOpen:state.modalState.isModalOpen
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(title,body)=>dispatch({type:'addPost',title:title,body:body}),
        deletePost:(id)=>dispatch({type:' deletePost',id:id}),
        openModal:()=>dispatch({type:'openModal'}),
        closeModal:()=>dispatch({type:'closeModal'}),
        updatePost:(post)=>dispatch({type:'updatePost', post:post})
    }
}
const PostContainer=connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostContainer;
