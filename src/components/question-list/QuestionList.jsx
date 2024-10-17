import React, { useState } from "react";
import Questions from "../../question.json";
import Question from "./Question";
import QuizResult from "./QuizResult";

const QuestionScreen = ({retry}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const isQuestionEnd = currentQuestionIndex === Questions.quizzes.length;
  
  return (
    <div className="text-white">
      {isQuestionEnd ? (
        <QuizResult score={score} correctAnswer={correctAnswer} retry={retry} />
      ) : (
        <Question
          question={Questions.quizzes[currentQuestionIndex]}
          totalQuestions={Questions.quizzes.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnsweredQuestions={setAnsweredQuestions}
          setScore={setScore}
          score={score}
          answeredQuestions={answeredQuestions}
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          retry={retry}
        />
      )}
    </div>
  );
};

export default QuestionScreen;
