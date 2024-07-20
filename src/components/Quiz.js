import React, { useState, useEffect, useCallback } from 'react';
import './Quiz.css';
import { htmlQuiz } from './Data';

export default function Quiz({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(htmlQuiz.length).fill(null));
  const [answeredQuestions, setAnsweredQuestions] = useState(Array(htmlQuiz.length).fill(false));
  const [optionsDisabled, setOptionsDisabled] = useState(Array(htmlQuiz.length).fill(false));
  const [timeLeft, setTimeLeft] = useState(5 ); // 5 minutes in seconds
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleFinish = useCallback(() => {
    // Ensure the result is displayed even if time runs out
    setShowScore(true);
    onFinish(score, htmlQuiz.length); // Pass score and total questions to parent
  }, [onFinish, score]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      handleFinish(); // Automatically finish the quiz when time runs out
    }
  }, [timeLeft, handleFinish]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const allQuestionsAnswered = () => {
    return selectedAnswers.every(answer => answer !== null);
  };

  const next = () => {
    if (index === htmlQuiz.length - 1) {
      if (!allQuestionsAnswered()) {
        alert('Please answer all questions before finishing the quiz.');
        return;
      }
      if (selectedAnswers[index] === htmlQuiz[index].ans) {
        setScore(prevScore => prevScore + 1);
      }
      handleFinish();
    } else {
      // Handle next question logic
      if (selectedAnswers[index] === htmlQuiz[index].ans) {
        setScore(prevScore => prevScore + 1);
      }

      // Disable options for the current question only if an option was selected
      const newOptionsDisabled = [...optionsDisabled];
      if (selectedAnswers[index] !== null) {
        newOptionsDisabled[index] = true;
      }
      setOptionsDisabled(newOptionsDisabled);

      const newAnsweredQuestions = [...answeredQuestions];
      newAnsweredQuestions[index] = true;
      setAnsweredQuestions(newAnsweredQuestions);

      if (index < htmlQuiz.length - 1) {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleAnswerSelect = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const question = htmlQuiz[index];
  const selectedAnswer = selectedAnswers[index];
  const isAnswered = answeredQuestions[index];
  const isDisabled = optionsDisabled[index]; // Check if options should be disabled

  return (
    <>
      {showScore ? (
        <section className='QuizSec' id='quizSec'>
          <div className="box">
            <div className="header">Quiz Application</div>
            <div className="score">
              Your score is {score} out of {htmlQuiz.length}
            </div>
          </div>
        </section>
      ) : (
        <section className='QuizSec' id='quizSec'>
          <div className="box">
            <div className="header">Quiz Application</div>
            <div className="que-time">
              <div className="que" id='question'>
                {index + 1}. {question.que}
              </div>
              <div className="timer">{formatTime(timeLeft)}</div>
            </div>
            <div className="opt">
              <input
                className='rad'
                type="radio"
                name="answer"
                id="option1"
                checked={selectedAnswer === question.opt1}
                onChange={() => handleAnswerSelect(question.opt1)}
                disabled={isDisabled && selectedAnswer !== question.opt1}
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
                onChange={() => handleAnswerSelect(question.opt2)}
                disabled={isDisabled && selectedAnswer !== question.opt2}
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
                onChange={() => handleAnswerSelect(question.opt3)}
                disabled={isDisabled && selectedAnswer !== question.opt3}
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
                onChange={() => handleAnswerSelect(question.opt4)}
                disabled={isDisabled && selectedAnswer !== question.opt4}
              />
              <label htmlFor="option4" id='val4'>{question.opt4}</label>
            </div>
            <div className="btns">
              <button className='btn1' onClick={prev} disabled={index === 0}>Prev</button>
              <button className='btn2' onClick={next}>Next</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
