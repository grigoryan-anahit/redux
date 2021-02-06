import React from 'react';
import style from '../posts.module.css';
import { Field, reduxForm } from 'redux-form';

const EditPage = ({handleSubmit}) => {

    // const   handleUpdatePost = (e) => {

    //     dispatch({ type: 'updatePost', post: updatedPost })
    // }

    return (
        <div className={style.editPage}>
            <form className={style.form} onSubmit={handleSubmit}>
                <Field
                    type="text"
                    name="title"
                    placeholder="Post Title"
                    data-input="editPost"
                    component="input"
                />
                <Field
                    name="body"
                    cols="20"
                    rows="5"
                    style={{ resize: "none" }}
                    placeholder="Post Message"
                    data-input="editPost"
                    component="textarea"
                />
                <button>Save</button>
            </form>
        </div>
    )
}
// onClick={(e) => handleEditPost(e, id)}
const EditPageRedux = reduxForm({
    form: 'editPost'
})(EditPage);

export default EditPageRedux
