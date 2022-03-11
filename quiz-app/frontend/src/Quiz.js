/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";

export default function Quizzes() {
  // let incorrectAnswers;

  const [quiz, setQuiz] = useState([0]);
  const [incorrectAnswers, setAnswers] = useState([0]);
  // const [correctAnswers,  setAnswer] = useState([0]);

  useEffect(() => {
    fetch("http://localhost:4001/quiz")
      .then((response) => response.json())

      .then((data) => {
        // answerChoices: [
        //     {
        //       choice: data.results[0]["incorrect_answers"][0],
        //       isCorrect: false
        //     },
        //     {
        //       choice: data.results[0]["incorrect_answers"][1],
        //       isCorrect: false
        //     },
        //     {
        //      choice: data.results[0]["incorrect_answers"][2],
        //       isCorrect: false
        //     }\
        //  ]
        let array = data.results[0]["incorrect_answers"].map((answerOption, index) => (
                    answerOption
          ));
          array.push(data.results[0]["correct_answer"])
          console.log(array)
        setAnswers(
            array
        //   [data.results[0]["incorrect_answers"].push(
        //   data.results[0]["correct_answer"]],
        
        );

        console.log("Fetch data", data);
        let text = data.results[0].question;
        let decodedText = decodeURI(text);
        setQuiz(decodedText);
      });
  }, []);

  return (
    <>
 

      <div className="question-text">{quiz}</div>
      {/* <button className="answer-section">{correctAnswers}</button> */}

      <div className="answer-section">
        {incorrectAnswers.map((answerOption, index) => (
          <button key={index}>{answerOption} </button>
          
        ))};

      </div>
    </>
    
  );
}

