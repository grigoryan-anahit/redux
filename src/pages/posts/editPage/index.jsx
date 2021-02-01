import style from './editPage.module.css';
import {reduxForm,Field} from 'redux-form';

const EditPage = ( props) => {
     return (
            <form action="" className={style.Pform} onSubmit={props.handleSubmit}>
                <Field
                    type="text"
                    name="title"
                    placeholder="Post a new Title"
                    data-input="editPost"
                    component='input' 
                    initialValues='lll'
                />
                <Field
                    name="body"
                    cols="20"
                    rows="5"
                    style={{ resize: "none" }}
                    placeholder="Post a new Message"
                    data-input="editPost"
                    component='textarea'
                    initialValues='ggg'
                />
                <button type="submit" >Save</button>
            </form>
       
    )
}
const EditPostForm=reduxForm({
    form:'editPost'
   
    
}) (EditPage)

export default EditPostForm;
