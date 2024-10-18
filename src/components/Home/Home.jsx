import React from "react";
import "./home.css";

const Home = ({start}) => {
  return (
    <div className="container parent text-white d-flex flex-column justify-content-center align-items-center">
      <div className="title d-flex  justify-content-center align-items-center mb-3">
        <i className="bi bi-flower3 text-white fs-1"></i>
        <h1 className="text-white mx-0 my-auto">The React Quiz </h1>
      </div>
      <h3 className="mb-2">welcome to the quiz app!</h3>
      <p>5 questions to test your  mastery</p>
      <button className="p-2 my-3 btn  rounded text-white" onClick={start}>Let's get started</button>
    </div>
  );
};

export default Home;
