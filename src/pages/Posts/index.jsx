import style from './posts.module.css';
import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import EditPage from './EditPage';
import Preloader from '../../components/Preloader';
import AddNewPostForm from './AddNewPost';
import { reset } from 'redux-form';
import { Container, Row, Col } from 'react-bootstrap';
//Action Creators
import { deletePostAC, openModalAC, closeModalAC, updatePostAC } from '../../store/actionCreators';
//Thunks
import setPostsThunk from '../../store/thunks/setPosts';
import addPostThunk from '../../store/thunks/addPost';

class Posts extends Component {
    state = {
        editPost: null
    }

    componentDidMount() {
        this.props.setPostsTunk();
    }
    setEditablePost = (editPost) => {
        const { openModal } = this.props;
        this.setState({
            editPost
        }, () => {
            openModal();
        })
    }
    handleEditPost = (formData) => {
        const { updatePost, closeModal } = this.props;
        updatePost(formData);
        closeModal();
        this.setState({
            editPost: null
        });
    }
    handleSubmitNewPost = (formData) => {
        this.props.addPost(formData.body, formData.title);
        this.props.resetAddNewPostForm();
    }
    render() {

        const { posts, isModalOpen, deletePostById, closeModal } = this.props;
        if (!posts.length) return <Preloader />;

        const Posts = posts.map(post => {
            return (
                <Col key={post.id} xl={4} className="mt-3">
                    <Post
                        post={post}
                        setEditablePost={this.setEditablePost}
                        deletePostById={deletePostById}
                    />
                </Col>
            )
        })

        return (
            <>
                <div>

                    <Container>
                        <Row>
                            <Col>
                                <h1>Posts Page</h1>
                                <AddNewPostForm
                                    onSubmit={this.handleSubmitNewPost}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            {Posts}
                        </Row>
                    </Container>

                </div>

                {
                    this.state.editPost &&
                    isModalOpen && <Modal closeModal={closeModal}>
                        <EditPage
                            onSubmit={this.handleEditPost}
                            initialValues={
                                {
                                    ...this.state.editPost
                                }
                            }
                        // data={{
                        //     title: this.state.editInputs.title.value,
                        //     body: this.state.editInputs.body.value,
                        //     id: this.state.editInputs.id
                        // }}
                        // handleChange={this.handleChange}
                        // handleEditPost={this.handleEditPost}
                        />
                    </Modal>
                }
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.postsState.posts,
        isModalOpen: state.modalState.isModalOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (body, title) => dispatch(addPostThunk(body, title)),
        deletePostById: (id) => dispatch(deletePostAC(id)),
        openModal: () => dispatch(openModalAC()),
        closeModal: () => dispatch(closeModalAC()),
        updatePost: (post) => dispatch(updatePostAC(post)),
        setPostsTunk: (test) => dispatch(setPostsThunk(test)),
        resetAddNewPostForm: () => dispatch(reset('addNewPost'))
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;

