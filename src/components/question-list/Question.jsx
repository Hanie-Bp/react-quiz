import React, { useState } from "react";
import "./question.css";
import QuizResult from "./QuizResult";
import Timer from "../timer/timer";

const Question = ({
  question,
  totalQuestions,
  currentQuestion,
  setScore,
  setAnsweredQuestions,
  score,
  setCurrentQuestionIndex,
  answeredQuestions,
  correctAnswer,
  setCorrectAnswer,
  retry,
}) => {
  const [quizEnded, setQuizEnded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [seconds, setSeconds] = useState(60);
  // console.log(score);

  const handleQuit = () => {
    setQuizEnded(true);
  };

  if (quizEnded) {
    return (
      <QuizResult
        totalQuestions={totalQuestions}
        answeredQuestions={answeredQuestions}
        retry={retry}
        correctAnswer={correctAnswer}
        score={score}
      />
    );
  }

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    setAnsweredQuestions(answeredQuestions + 1);
    if (index === question.correctAnswer) {
      setCorrectAnswer(correctAnswer + 1);
      setScore(score + question.score);
    }
  };

  // console.log("answerd question", answeredQuestions);

  const getOptionAnswer = (index) => {
    if (!isAnswered) return "";
    if (index === question.correctAnswer) return "correct";
    if (index === selectedOption) return "wrong";
    return "";
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setSeconds(60);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="question-container d-flex flex-column parent text-white  justify-content-center ">
      <div className="title d-flex  mb-3">
        <i className="bi bi-flower3 text-white fs-1"></i>
        <h3 className="text-white   mx-0 my-auto">The React Quiz </h3>
      </div>
      {/*  */}
      <div className="progress-container">
        <progress value={currentQuestion - 1} max="5"></progress>
        <div className="progress-text">
          Questions {currentQuestion - 1}/{totalQuestions}
        </div>
      </div>
      <div className="">
        <h3 className="text-center">{question.question}</h3>
        <div className="options mt-3  ">
          {question.options.map((option, index) => {
            return (
              <div
                className={`option mt-3 p-1 w-100 p-2 ${getOptionAnswer(
                  index
                )}`}
                key={index}
                onClick={() => {
                  handleOptionClick(index);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" d-flex mt-4 justify-content-between align-items-center">
        <p className="timer d-flex  mx-0 my-auto">
          Time Left:
          {
            <Timer
              handleNext={handleNext}
              seconds={seconds}
              setSeconds={setSeconds}
            />
          }
        </p>
        {isAnswered ? (
          <button className="btn  rounded text-white" onClick={handleNext}>
            Next question
          </button>
        ) : (
          <button className="btn  rounded text-white" onClick={handleQuit}>
            Quit the quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
