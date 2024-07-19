import React, { useState } from 'react'
import './Quiz.css'
import { htmlQuiz } from './Data';

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const deselect = () => {
    setSelectedAnswer(null); // Deselect all radio buttons
  };

  const next = () => {
    if (index < htmlQuiz.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
      deselect();
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
      deselect();
    }
  };

  const question = htmlQuiz[index];

  return (
    <>
      <section className='QuizSec' id='quizSec'>
        <div className="box">
          <div className="header">Quiz Application</div>
          <div className="que-time">
            <div className="que" id='question'>
              {index + 1}. {question.que}
            </div>
            <div className="timer">4 : 59</div>
          </div>
          <div className="opt">
            <input
              className='rad'
              type="radio"
              name="answer"
              id="option1"
              checked={selectedAnswer === question.opt1}
              onChange={() => setSelectedAnswer(question.opt1)}
            />
            <label htmlFor="option1" id='val1'>{question.opt1}</label>
          </div>
          <div className="opt">
            <input
              className='rad'
              type="radio"
              name="answer"
              id="option2"
              checked={selectedAnswer === question.opt2}
              onChange={() => setSelectedAnswer(question.opt2)}
            />
            <label htmlFor="option2" id='val2'>{question.opt2}</label>
          </div>
          <div className="opt">
            <input
              className='rad'
              type="radio"
              name="answer"
              id="option3"
              checked={selectedAnswer === question.opt3}
              onChange={() => setSelectedAnswer(question.opt3)}
            />
            <label htmlFor="option3" id='val3'>{question.opt3}</label>
          </div>
          <div className="opt">
            <input
              className='rad'
              type="radio"
              name="answer"
              id="option4"
              checked={selectedAnswer === question.opt4}
              onChange={() => setSelectedAnswer(question.opt4)}
            />
            <label htmlFor="option4" id='val4'>{question.opt4}</label>
          </div>
          <div className="btns">
            <button className='btn1' onClick={prev}>Prev</button>
            <button className='btn2' onClick={next}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
}
