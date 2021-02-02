import style from './editPage.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

const EditPage = (props) => {
    // console.log('initialValues' , props.initialValues);
    // console.log('Onsubmit' , props.onSubmit);
    // handleSubmit = (formData) =>{
    //     e.preventDeafult();
    //     props.onSubmit(formData);
    // }
    return (
        <form className={style.Pform} onSubmit={props.handleSubmit}>
            <Field
                type="text"
                name="title"
                placeholder="Post a new Title"
                component='input'
            />
            <Field
                name="body"
                cols="20"
                rows="5"
                style={{ resize: "none" }}
                placeholder="Post a new Message"
                component='textarea'
            />
            <Field
                name="id"
                component='input'
                type="hidden"
            />
            <Field
                name="userId"
                component='input'
                type="hidden"
            />
            <button type="submit">Save</button>
        </form>

    )
}




let EditPostForm = reduxForm({
    form: 'editPost',
})(EditPage);

const mapStateToProps = (state, props) => {
    return {
        initialValues: {
            ...props.values
        }
    }
}
EditPostForm = connect(mapStateToProps)(EditPostForm);



export default EditPostForm;
