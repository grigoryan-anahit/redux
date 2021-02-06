import styles from '../posts.module.css';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import Input from '../../../components/Input';
import Textarea from '../../../components/TextArea';

const AddNewPostForm = ({ handleSubmit }) => {

    return (
        <form action="#" className={styles.addPostForm} onSubmit={handleSubmit}>
            <Field

                type="text"
                name="title"
                placeholder="Post Title"
                component={Input}
            />
            <Field
                name="body"
                cols="20"
                rows="10"
                style={{ resize: "none" }}
                placeholder="Post Message"
                component={Textarea}
            />
            <Button variant="primary" type="submit" className="mt-3">
                Add Post
            </Button>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({
    form: 'addNewPost',
})(AddNewPostForm)

export default AddNewPostFormRedux;