import style from './posts.module.css';
import React, { Component } from 'react';
import Post from './post';
import {connect} from 'react-redux';
import Modal from '../../components/modal';

import Preloader from '../../components/preloader';
import AddNewPostForm from './addnewPost';
import EditPostForm from './editPage';
//actionCreators
import {updatePostAC,deletePostAC,addPostAC,openModalAC,closeModalAC}  from '../../store/actionCreators';
//thunks
import setPostsThunk from '../../store/thunks/setPosts';
import {reset} from 'redux-form';

class Posts extends Component {
    state = {
       
       
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

    componentDidMount(){
    //     const {setPost}=this.props;
    //    (async function getPost(){
    //         const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data=await response.json();
    //        setPost(data);
    //     })();
        this.props.setPostsThunk();
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
    // handleEditPost = (e ,id) => {
    //     const {updatePost,closeModal}=this.props;
    //     e.preventDefault();
    //     const updatedPost = {
    //         id,
    //         title:this.state.editInputs.title.value,
    //         body:this.state.editInputs.body.value
    //     }
    //    updatePost(updatedPost);
    //    closeModal();
    //     this.setState(prevState=>{
    //         return {
    //             ...prevState,
    //             editInputs:{
    //                 id:'',
    //                 title:{
    //                     ...this.state.editInputs.title,
    //                     value:''
    //                 },
    //                 body:{
    //                     ...this.state.editInputs.body,
    //                     value:''
    //                 }
    //             }
    //         }
    //     })
    // }

  
    handleSubmitNewPost=(formData)=>{
        this.props.addPost(formData.title,formData.body);
        this.props.resetAddNewPostForm();
    }
    handleSubmitEditPost=(formData)=>{
        this.props.updatePost(formData.id,formData.title,formData.body);
        //this.props.closeModal();
    }
    render() {
       
        const { posts, isModalOpen ,deletePost, closeModal} = this.props;
        if(!posts.length)  return <Preloader />;
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
                <AddNewPostForm 
                    onSubmit={this.handleSubmitNewPost}/>
                    <div className={style.postsWrapper}>
                        {Posts}
                    </div>
                </div>

                {
                    //this.state.editInputs.id &&
                    isModalOpen && <Modal closeModal={closeModal}>
                        <EditPostForm
                                onSubmit={this.handleSubmitEditPost}
                               
                                  
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
    return {
        addPost:(title,body)=>dispatch(addPostAC(title,body)),
        deletePost:(id)=>dispatch(deletePostAC(id)),
        openModal:()=>dispatch(openModalAC()),
        closeModal:()=>dispatch(closeModalAC()),
        updatePost:(post)=>dispatch(updatePostAC(post)),
        setPostsThunk:()=>dispatch(setPostsThunk()),
        resetAddNewPostForm:()=>dispatch(reset('addNewPost'))
    }
}
const PostContainer=connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostContainer;
