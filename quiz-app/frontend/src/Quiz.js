import React, { useState, useEffect } from 'react'


 export default function Quizzes() {

  
    const [quiz, setQuiz] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/quiz")
        .then((response) => response.json())      
        .then(quiz => {
            setQuiz(quiz.results);
            console.log("Fetch data", quiz)
        })  
    }, []);

    return (
        
    
          
   

    <>
      {JSON.stringify(quiz)}
    {/* <div className='question-text'>{quiz[currentQuestion].question}</div>
    
    <div className='answer-section'>
        {quiz[currentQuestion][question].map((answerOption) => {
            return (
                <button>{answerOption}</button>
            );
        })};
        
    </div> */}
    </>
    )
 }