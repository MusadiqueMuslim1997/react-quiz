import React, { useState } from 'react'
import './Quiz.css'

export default function Quiz() {

    let htmlQuiz = [
        {
            que: '1. Who is making the Web standards?',
            opt1: 'Google',
            opt2: 'Microsoft',
            opt3: 'Mozilla',
            opt4: 'World Wide Web',
            ans: 'World Wide Web'
        },
    
        {
            que: '2. What is the abbreviation of HTML?',
            opt1: 'Hyper Text Markup Language',
            opt2: 'Hyper Info Markup Language',
            opt3: 'Hyper Tend Markup Language',
            opt4: 'Hyper Test Markup Language',
            ans: 'Hyper Text Markup Language'
        }
        ,
    
    
        {
            que: '3. Choose the correct HTML element to define important text',
            opt1: 'Strong',
            opt2: 'I',
            opt3: 'B',
            opt4: 'Important',
            ans: 'Important'
        },
        {
            que: '4. In which of the following ways can we create strings in JavaScript?',
            opt1: "'A string'",
            opt2: '"A string"',
            opt3: '`A string`',
            opt4: 'All of the above',
            ans: 'All of the above'
        },
    
    
        {
            que: '5. How to convert a string str to lowercase characters?',
            opt1: 'str.lower()',
            opt2: 'str.toLower()',
            opt3: 'str.toLowerCase()',
            opt4: 'None',
            ans: 'str.toLowerCase()'
        },
        {
            que: '6. var str = "I love cats!";  console.log (str.indexOf("cat"));',
            opt1: '6',
            opt2: '7',
            opt3: '-1',
            opt4: '8',
            ans: '7'
        },
        {
            que: '7. How can we extract "Pizza" from the string str="Pizza Lover"?',
            opt1: 'str.slice(0, 4)',
            opt2: 'str.slice(0, 5)',
            opt3: 'str.slice(4, 0)',
            opt4: 'str.slice(5, 0)',
            ans: 'str.slice(0, 5)'
        },
        {
            que: '8. What does str.charAt(1) return for the string str = "Hello"?',
            opt1: '"H"',
            opt2: '"e"',
            opt3: '"l"',
            opt4: 'undefined',
            ans: '"e"'
        },
        {
            que: '9. Suppose that str is equal to the string "Mango Apple  Orange". What will str.split() return?',
            opt1: '["Mango", "Apple", "Orange"]',
            opt2: '["Mango", "Apple", "", "Orange"]',
            opt3: '["Mango Apple  Orange"]',
            opt4: 'All of the above',
            ans: '["Mango", "Apple", "Orange"]'
        },
        {
            que: '10. The external JavaScript file must contain the <script> tag.',
            opt1: 'True',
            opt2: 'False',
            opt3: 'All of the above',
            opt4: 'None of the above',
            ans: 'False'
        }
    ]
    const [questionCount, setQuestionCount] = useState(0);
    const [score, setScore] = useState(0);
// let question = document.getElementById('question')
let randerQuestion = () =>{
    let question =  htmlQuiz[questionCount].que;
}


randerQuestion()
  return (
   <>

<section className='QuizSec' id='quizSec'>
    <div className="box">
        
<div className="header">Quiz Application</div>
<div className="que-time">
<div className="que" id='question'>
    1. Following data methods can be used to display data in some from using javascript 
</div>
<div className="timer">4 : 59</div>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option1" />
    <label htmlFor="option1" id='val1'>document.write()</label>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option2" />
    <label htmlFor="option2" id='val2'>console.log()</label>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option3" />
    <label htmlFor="option3" id='val3'>window.alert()</label>
</div>
<div className="btns">
    <button className='btn1'>Prev</button>
    <button className='btn2'>Next</button>
</div>


    </div>
</section>

   </>
  )
}
