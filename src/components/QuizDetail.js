import React from 'react'
import './Quiz.css'
export default function QuizDetail() {
  return (
 <section className='hero'>

<div className="box">

<div className="header">Quiz Application</div>
<div className="instruction">
<ul>
    <li>1. You will be asked 10 questions after another.</li>
    <li>2. You points are awarded for the correct answer.</li>
    <li>3. Each question has four option. You can choose only one option.</li>
    <li>4. You can review and change answers before the quiz finish.</li>
    <li>5. The result will be declared at the end of the quiz.</li>
</ul>
</div>

<div className="inp-user">
    <input type="text" name="" id="" placeholder='Enter username'/>
</div>
<div className="startBtn">
    <button>Start Quiz</button>
</div>

</div>

 </section>



  )
}
