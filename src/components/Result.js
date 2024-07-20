import React from 'react';
import './Quiz.css';

export default function Result({ username, score = 0, totalQuestions = 0 }) {
  // Ensure score and totalQuestions are valid
  if (score > totalQuestions) {
    console.warn('Score exceeds total number of questions.');
  }

  const pointsPerQuestion = 10;
  const totalPoints = totalQuestions * pointsPerQuestion;
  const earnedPoints = score * pointsPerQuestion;

  // Calculate percentage and cap it at 100
  const percentage = totalQuestions > 0 ? Math.floor((score / totalQuestions) * 100) : 0;
  const result = percentage >= 50 ? 'Passed' : 'Failed';

  return (
    <section className='main' id='result'>
      <div className="boxes">
        <div className="header">Quiz Application</div>
        <div className="info">
          <div className="tit">
            <div className="name">Username</div>
            <div className="val">{username}</div>
          </div>
          <div className="tit">
            <div className="name">Total Quiz Points</div>
            <div className="val">{totalPoints}</div>
          </div>
          <div className="tit">
            <div className="name">Total Questions</div>
            <div className="val">{totalQuestions}</div>
          </div>
          <div className="tit">
            <div className="name">Correct Answers</div>
            <div className="val">{score}</div>
          </div>
          <div className="tit">
            <div className="name">Total Earned Points</div>
            <div className="val">{earnedPoints}</div>
          </div>
          <div className="tit">
            <div className="name">Percentage</div>
            <div className="val">{Math.min(percentage, 100)}%</div> {/* Ensure percentage does not exceed 100% */}
          </div>
          <div className="tit">
            <div className="name">Quiz Result</div>
            <div className={`val ${result === 'Passed' ? 'green' : 'red'}`}>{result}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
