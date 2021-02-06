import { Form } from 'react-bootstrap';
const Input = (field) => {
    return (
        <>
            <Form.Control {...field.input}
                type={field.type}
                placeholder={field.placeholder}
            />
        </>
    )
}

export default Input