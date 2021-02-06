import { Form } from 'react-bootstrap';
const Textarea = (field) => {

    return (
        <>
            <Form.Control
                as="textarea"
                {...field.input}
                placeholder={field.placeholder}
                rows={field.rows}
                cols={field.cols}
            />
        </>
    )
}

export default Textarea