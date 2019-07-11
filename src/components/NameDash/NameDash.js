import React from 'react'
import style from './NameDash.module.css'
import CountUp from 'react-countup';
import QUESTIONS from "../../questions";


function NameDash() {
    const {dupa1, dupa2} = style;
    const total = '      total';
    return (
<div>
    <div className={dupa1}>Test User</div>
    <div className={dupa2}>
    <CountUp start={1} end={QUESTIONS.length} delay={0}>
  {({ countUpRef }) => (
    <div style={{display: 'inline'}}>
        <span style={{display: 'inline'}} ref={countUpRef}/>
        {total}
    </div>
  )}
</CountUp>
    </div>
</div>
    )
}




export default NameDash


