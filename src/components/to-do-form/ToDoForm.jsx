import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ToDoForm = () => {
    return (
        <Form style={{ width: '18rem' }}>
            <Form.Group className="mb-3" >
                <Form.Label>To-Do</Form.Label>
                <Form.Control type="text" placeholder="What do you need to do?" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ToDoForm;