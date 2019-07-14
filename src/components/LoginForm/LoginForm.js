// import React from "react";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";
//
//
// const LoginForm = (props) => (
//     <Formik
//         initialValues={{ email: "", password: "" }}
//         onSubmit={(values, { setSubmitting }) => {
//             setTimeout(() => {
//                 console.log("Logging in", values);
//                 setSubmitting(false);
//             }, 500);
//         }}
//
//
//         validationSchema={Yup.object().shape({
//             email: Yup.string()
//                 .email()
//                 .required("Required"),
//             password: Yup.string()
//                 .required("No password provided.")
//                 .min(8, "Password is too short - should be 8 chars minimum.")
//                 .matches(/(?=.*[0-9])/, "Password must contain a number.")
//         })}
//     >
//         {props => {
//             const {
//                 values,
//                 touched,
//                 errors,
//                 isSubmitting,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//             } = props;
//             return (
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         name="email"
//                         type="text"
//                         placeholder="Enter your email"
//                         value={values.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.email && touched.email && "error"}
//                     />
//                     {errors.email && touched.email && (
//                         <div className="input-feedback">{errors.email}</div>
//                     )}
//                     <label htmlFor="email">Password</label>
//                     <input
//                         name="password"
//                         type="password"
//                         placeholder="Enter your password"
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.password && touched.password && "error"}
//                     />
//                     {errors.password && touched.password && (
//                         <div className="input-feedback">{errors.password}</div>
//                     )}
//                     <button type="submit" disabled={isSubmitting} onClick={props.tryLogin}>
//                         Login
//                     </button>
//                 </form>
//             );
//         }}
//     </Formik>
// );
//
// export default LoginForm;


import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './LoginForm.module.css'
import { Redirect } from "react-router-dom"


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
                        onClick={() => this.props.tryLogin()}
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
