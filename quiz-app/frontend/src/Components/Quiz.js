import React, { useState, useEffect } from "react";

// // const url = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState([0]);
 const [answers, setAnswers] = useState([0]);
  const [questions, setQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4001/quiz")
      .then((response) => response.json())
      .then((data) => {
        console.log(data["answers"]);
        let array = data.results[0]["incorrect_answers"]
        array.push(data.results[0]["correct_answer"]);
        setAnswers(array);

        console.log("Fetch data", data);
        setCurrentQuestion(data.results);
        // let decodedText = decodeURI(text);
        // setCurrentQuestion(decodedText);
      });
  }, []);

  const handleAnswerButtonClick = (correct_answer) => {
    const nextQuestion = questions + 1;
    setQuestion(nextQuestion);

    if (nextQuestion < questions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    if (correct_answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="question-text" 
      dangerouslySetInnerHTML={{__html:currentQuestion[questions].question}}>
          {/* {currentQuestion[questions].question} */}
        </div>

        <div className="answer-section">
          {answers.map((answerOption, index) => (
            <button
              className="answer-buttons"
              onClick={() => handleAnswerButtonClick(["correct_answer"])}
              key={index}
            >
              {answerOption}
            </button>
          ))}
        </div>
        <div className="app">
          {showScore ? (
            <div>you scored {score} ouf of 10 </div>
          ) : (
            <div>{score}</div>
          )}
        </div>
      </div>
    </div>
  );
}

//   useEffect(() => {
//     fetch("http://localhost:4001/quiz")
//       .then((response) => response.json())
//       .then((data) => {
//         setCurrentQuestion(data.results)
//       });

//   },[]);


// return (

//   <div>
//       <div className="question-text">
//         {currentQuestion[0].question}
//       </div>
//       <div className='answer-section'>
//         <button className='answer-buttons'>
//           {currentQuestion[0].correct_answer}
//         </button>
//         <button className='answer-buttons'>
//           {currentQuestion[0].incorrect_answers}
//         </button>
//         <button className='answer-buttons'>
//           {currentQuestion[0].incorrect_answers}
//         </button>
//         <button className='answer-buttons'>
//           {currentQuestion[0].incorrect_answer}
//         </button>
//       </div>


//   </div>
// )

// }