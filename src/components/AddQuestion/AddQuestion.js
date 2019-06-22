import React from 'react'
import styles from './AddQuestion.module.css'


function AddQuestion(){
    const {addAccount, addAccountToggle, addAccountX, addNewAccount} = styles;
return <div className={addAccount}>
        <div className={addAccountToggle}></div>
        <span className={addAccountX}>X</span>
        <h2>Add Question</h2>
        <form  method="post" target="_blank">
            <input type="name" id="getName" name="" placeholder="Imię" />
            <input type="surname" name="" placeholder="Nazwisko"/>
            <input type="email" name="" placeholder="E-mail" required/>
            <input type="password" name="" placeholder="Password"/>
            <input type="submit" className={addNewAccount} name="" value="Add"/>
        </form>
    </div>
}


export default AddQuestion
