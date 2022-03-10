import React, { useState, useEffect } from 'react'


 export default function Quizzes() {

    // let incorrectAnswers;
  
    const [quiz, setQuiz] = useState([0]);
    const [incorrectAnswers,  setAnswers] = useState([]);
    // const [correctAnswers,  setAnswer] = useState([0]);

    useEffect(() => {
       fetch("http://localhost:4001/quiz")
        .then((response) => response.json())
    
        .then(data => {
           setAnswers([data.results[0]["incorrect_answers"], data.results[0]["correct_answer"]]);
        //    setAnswer(data.results[0]["correct_answer"]);

            console.log("Fetch data", data);
         setQuiz(data.results[0].question);
        })
            
            // info.then(quiz => {
            //     setQuiz(quiz.results[0].question);
            //     console.log("Fetch data", quiz);
       
        
       
        //  }) 
        


    }, []);


       
        
   

    return (
        
    
    <>
      {JSON.stringify(quiz)}
      {JSON.stringify(incorrectAnswers)} 

    
        <div className='question-text'>{quiz}</div>   
        {/* <button className="answer-section">{correctAnswers}</button> */}

        <div className='answer-section'> 
	{incorrectAnswers.map((answerOption, index) => (
            <button>{answerOption}</button> 
	))}  
  </div>  
    </>
    )
 }