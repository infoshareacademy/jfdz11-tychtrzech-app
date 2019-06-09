import React from 'react'
import logo from './logo.png';
import { img as imgClass } from './Logo.module.css'

function Logo ({

//   onClick = () => history.push('/')
}) {
  return (
    <img className={imgClass}
    //   onClick={onClick}
      src={logo}
    //   className={className}
      alt="logo"
    //   style={style}
    />
  )
}
export default Logo