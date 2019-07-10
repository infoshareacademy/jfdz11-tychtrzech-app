import React from 'react'
import style from './NameDash.module.css'
import CountUp from 'react-countup';


function NameDash() {
    return (
<div >
    <h1>Imię Nazwisko</h1>
    <h2>Liczba Wszystkich Pytań:
    <CountUp start={0} end={100} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
    </h2>
 

</div>

    )
};




export default NameDash


