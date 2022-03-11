import React, { useState, useEffect } from "react";

const url = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState([0]);
  const [incorrectAnswers, setAnswers] = useState([0]);
  const [questions, setQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score,setScore] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data["incorrect_answers"])
        let array = data.results[0]["incorrect_answers"].map(
          (answerOption) => answerOption
        );
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
      if(nextQuestion < questions) {
        setCurrentQuestion(nextQuestion);
      }else {
        setShowScore(true)
            }
      if (correct_answer){
        setScore(score + 1);
      }
  };

  return (
    <>

      <div className="question-text">{currentQuestion[questions].question}</div>

      <div className="answer-section">
        {incorrectAnswers.map((answerOption, index) => (
          <button onClick={() => handleAnswerButtonClick(['correct_answer'])} key={index}>
            {answerOption}
          </button>
        ))}
      </div>
      <div className='app'>{showScore ? <div>you scored {score} ouf of 10 </div>: <div>{score}</div>}</div>


    </>
  );
}




//  export default function Quiz() {
//   const [questions, setQuestions] = useState([0]);

//     useEffect(() =>{
//         fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setQuestions(data.results)
//         });
//  },[])


// return (
// <>
// <h2 className='question'>{questions[0].question}</h2>
// <button className='answers'>{questions[0]["correct_answer"]}</button>
// <button className='answers'>{questions[0]['incorrect_answers']}</button>
// {/* <div className='answers'>{questions[0]["incorrect_answers"]}</div>
// <div className='answers'>{questions[0]["incorrect_answers"]}</div> */}



// </>

// )
//  }