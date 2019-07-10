import React from 'react'
import style from './NameDash.module.css'
import CountUp from 'react-countup';


function NameDash() {
    return (
<div >
    <div className={style.dupa1}>Imię Nazwisko</div>
    <div className={style.dupa2}>Liczba Wszystkich Pytań:
    <CountUp start={0} end={100} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
    </div>


</div>

    )
};




export default NameDash


