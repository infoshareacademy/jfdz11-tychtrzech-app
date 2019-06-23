import React from 'react'
import styles from './Signup.module.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Signup(){
    const {addAccount, addAccountToggle, addAccountX, addNewAccount} = styles;
return <div className={addAccount}>
        <h2>Sign in!</h2>
        <form  method="post" target="_blank">
            <input type="name" id="getName" name="" placeholder="Name" />
            <input type="surname" name="" placeholder="Surname"/>
            <input type="email" name="" placeholder="E-mail" required/>
            <input type="password" name="" placeholder="Password"/>
            <input type="submit" className={addNewAccount} name="" value="Sign in"/>
            <p style={{marginTop: '10px', display: 'inline' }}> Have account already?</p>
            <Button style={{display: 'inline'}} variant="link"
                    size={"sm"} href={'/login'}> Login!</Button>
        </form>
    </div>
}


export default Signup
