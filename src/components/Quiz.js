import React, { useState } from 'react'
import './Quiz.css'
import { htmlQuiz } from './Data';

export default function Quiz() {
let [index,setIndex] = useState(0);
let [question,setQuestion]= useState(htmlQuiz[index])
  
let next = () =>{


    
}

  return (
   <>

<section className='QuizSec' id='quizSec'>
    <div className="box">
        
<div className="header">Quiz Application</div>
<div className="que-time">
<div className="que" id='question'>
    {index + 1}. {question.que} </div>
<div className="timer">4 : 59</div>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option1" />
    <label htmlFor="option1" id='val1'>{question.opt1}</label>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option2" />
    <label htmlFor="option2" id='val2'>{question.opt2}</label>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option3" />
    <label htmlFor="option3" id='val3'>{question.opt3}</label>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option3" />
    <label htmlFor="option3" id='val3'>{question.opt4}</label>
</div>
<div className="btns">
    <button className='btn1'>Prev</button>
    <button className='btn2' onClick={next}>Next</button>
</div>


    </div>
</section>

   </>
  )
}
