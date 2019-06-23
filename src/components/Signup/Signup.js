import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };


    render() {
        if(this.props.login === true){
            return null
        }

        return (
            <div style={{marginTop: '50px'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Control
                            placeholder="Name"
                            autoFocus
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="surname">
                        <Form.Control
                            placeholder="Surname"
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Control
                            placeholder="Email"
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    <Button
                        block
                        // disabled={!this.validateForm()}
                        type="submit"
                    >
                        Signup
                    </Button>
                    <p style={{marginTop: '30px', display: 'inline' }}> Have account already?</p>
                    <Button style={{display: 'inline'}} variant="link"
                            size={"sm"} href={'/login'}> Login!</Button>
                </Form>
            </div>
        );
    }
}

export default Signup
