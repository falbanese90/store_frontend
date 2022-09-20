import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.login = this.login.bind(this);
    }
    login(e) {
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    }
    render() {
        return (
            <div className='Login'>
                <Form onSubmit={this.login}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='username' placeholder='Enter Username' onChange={e => this.setState({ username: e.target.value })} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' onChange={e => this.setState({ password: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label='Check me out' />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}