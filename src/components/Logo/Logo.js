import React from 'react'
import logo from './logo.png';
import { img as imgClass } from './Logo.module.css'

  function Logo (){
  return (
    <img className={imgClass} src={logo} alt="logo" />
  )
}
export default Logo
