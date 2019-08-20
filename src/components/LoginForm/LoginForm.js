import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './LoginForm.module.css'
import { Redirect } from "react-router-dom"
import firebase from 'firebase'
import { Link } from "@material-ui/core";


class LoginForm extends React.Component {
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
        console.log(this.state);
        firebase.auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(result => {
            alert("Zalogowano poprawnie")
          })
          .catch(e => alert(e.message));
      };


    render() {
        if(this.props.login === true){
            return ( <Redirect to="/dashboard" />)
        }
        return (
            <div className={styles.Login} style={{marginTop: '50px'}}>
                <Form onSubmit={this.handleSubmit} className={styles.Loginform}>
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
                        onClick={this.handleSubmit}
                        block
                        // disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                    <p style={{marginTop: '30px', display: 'inline' }}> Don't have an account yet?</p>
                    <Button style={{display: 'inline'}} variant="link"
                            size={"sm"} href={'/signup'}> Sign in!</Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm
