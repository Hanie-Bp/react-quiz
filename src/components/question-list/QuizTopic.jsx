import { useEffect, useState } from "react";
import "./quiztopic.css";
import Home from "../Home/Home";
import Questions from "../../question.json";
import QuizResult from "./QuizResult";
import Question from "./Question";

const QuizTopic = ({ retry, isQuizStarted }) => {
  const [isTopicChoosed, setIsTopicChoosed] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(null);


  const isQuestionEnd =
    currentQuestionIndex === Questions.quizzes[selectedTopic]?.length;

  const handleTopic = (topic) => {
    setIsTopicChoosed(true);
    setSelectedTopic(topic);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(0);
    setCorrectAnswer(0);
  };

  return (
    <>
      {isQuestionEnd ? (
        <QuizResult score={score} retry={retry} correctAnswer={correctAnswer} />
      ) : isTopicChoosed ? (
        <Question
          question={Questions.quizzes[selectedTopic][currentQuestionIndex]}
          totalQuestions={Questions.quizzes[selectedTopic].length}
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
      ) : (
        <div className="d-flex flex-column topics text-white align-items-center justify-content-around">
          <h3 className=" align-self-start ms-4">Choose your quiz topic</h3>
          <div className="s1 d-flex  w-100 justify-content-around">
            <div onClick={() => handleTopic("React")}>
              <p>React</p>
            </div>
            <div onClick={() => handleTopic("Vue")}>
              <p>Vue</p>
            </div>
          </div>
          <div className="s2 d-flex w-100  justify-content-around">
            <div onClick={() => handleTopic("Angular")}>
              <p>Angular</p>
            </div>
            <div onClick={() => handleTopic("Svelte")}>
              <p>Svelte</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizTopic;
