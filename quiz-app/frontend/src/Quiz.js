import React, { useState, useEffect } from 'react'


 export default function Quizzes() {

  
    const [quiz, setQuiz] = useState([0]);
    const [answers, setAnswers] = useState([0]);
    useEffect(() => {
        let info = fetch("http://localhost:4000/quiz")
        .then((response) => response.json())   
        .then(answers => {
            setAnswers(answers.results[0]["incorrect_answers"])
            console.log("Fetch data", answers);
        })
            
            info.then(quiz => {
                setQuiz(quiz.results[0].question);
                console.log("Fetch data", quiz);
       
        
       
         }) 
        


    }, []);


       
        
   

    return (
        
    
    <>
      {/* {JSON.stringify(quiz)} */}
      {/* {JSON.stringify(answers)}  */}

    
        <div className='question-text'>{quiz}</div>   

        <div className='answer-section'>
	{answers.map((answerOption, index) => (
		<button>{answerOption}</button>
	))}
</div>
    </>
    )
 }