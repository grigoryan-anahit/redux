import style from '../posts.module.css';
import {reduxForm,Field } from 'redux-form';

const AddNewPostForm=({handleSubmit})=>{
    return (
        <form action="#" className={style.addPostForm} onSubmit={handleSubmit} >
        <Field
            component='input'
            type="text"
            name="title"
            placeholder="Post Title"
           
        />
        <Field
           component='textarea'
            name="body"
            cols="20"
            rows="10"
            style={{ resize: "none" }}
            placeholder="Post Message"
           
        />
        <button type="submit" >Add Post</button>
    </form>
    )
}
const AddNewPostFormRedux=reduxForm({
    form:'addNewPost'
})(AddNewPostForm)

export default AddNewPostFormRedux;