// import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home/Home.jsx";
import { useState } from "react";
import QuestionList from "./components/question-list/QuestionList.jsx";
import QuizTopic from "./components/question-list/QuizTopic.jsx";

// function App() {
//   const [isQuizStarted, setIsQuizStarted] = useState(false);

//   function startQuiz() {
//     setIsQuizStarted(!isQuizStarted);
//     // console.log('hello');
//   }
//   // console.log(isQuizStarted);

//   return (
//     <>
//       {isQuizStarted ? (
//         <QuestionList
//           retry={() => setIsQuizStarted(false)}
//           isQuizStarted={isQuizStarted}
//         />
//       ) : (
//         <Home start={startQuiz} />
//       )}
//     </>
//   );
// }

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
        <QuizTopic retry={() => setIsQuizStarted(false)}  isQuizStarted={isQuizStarted}/>
        // <QuestionList
        //   retry={() => setIsQuizStarted(false)}
        //   isQuizStarted={isQuizStarted}
        // />
      ) : (
        <Home start={startQuiz} />
      )}
    </>
  );
}

// function App() {
//   const [chooseTopic,setChooseTopic] = useState(false)

//   function chooseTopics() {
//     setChooseTopic(!chooseTopic)
//   }
//   return(
//     <>
//     {chooseTopic?<QuizTopic/>:<Home startQuiz={startQuiz}/>}
//     </>
//     // <Home chooseTopic={chooseTopic}/>
//     // <QuizTopic/>
//   )
// }

export default App;
