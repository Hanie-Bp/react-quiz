// import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home/Home.jsx";
import { useState } from "react";
import QuestionList from "./components/question-list/QuestionList.jsx";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  function startQuiz() {
    setIsQuizStarted(!isQuizStarted);
    // console.log('hello');
  }
  // console.log(isQuizStarted);

  return (
    <>
      {isQuizStarted ? (
        <QuestionList
          retry={() => setIsQuizStarted(false)}
          isQuizStarted={isQuizStarted}
        />
      ) : (
        <Home start={startQuiz} />
      )}
    </>
  );
}

export default App;
