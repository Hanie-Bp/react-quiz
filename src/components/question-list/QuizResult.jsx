import React, { useState } from 'react';
import './quizResult.css';

const QuizResult = ({retry,correctAnswer,score}) => {
  
  return (
    <div className='quiz-result d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-4'>Quiz completed</h1>
      <h4>Correct Answers:{correctAnswer}</h4>
      <p>Your Score:{score}</p>
      <button className=" my-3 btn  rounded text-white" onClick={retry}>Try Again</button>
    </div>
  )
}

export default QuizResult