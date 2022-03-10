// import './App.css';
// import React from 'react';

// export default function App() {
// 	const questions = [
// 		{
// 			questionText: 'What is the capital of France?',
// 			answerOptions: [
// 				{ answerText: 'New York', isCorrect: false },
// 				{ answerText: 'London', isCorrect: false },
// 				{ answerText: 'Paris', isCorrect: true },
// 				{ answerText: 'Dublin', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'Who is CEO of Tesla?',
// 			answerOptions: [
// 				{ answerText: 'Jeff Bezos', isCorrect: false },
// 				{ answerText: 'Elon Musk', isCorrect: true },
// 				{ answerText: 'Bill Gates', isCorrect: false },
// 				{ answerText: 'Tony Stark', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'The iPhone was created by which company?',
// 			answerOptions: [
// 				{ answerText: 'Apple', isCorrect: true },
// 				{ answerText: 'Intel', isCorrect: false },
// 				{ answerText: 'Amazon', isCorrect: false },
// 				{ answerText: 'Microsoft', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'How many Harry Potter books are there?',
// 			answerOptions: [
// 				{ answerText: '1', isCorrect: false },
// 				{ answerText: '4', isCorrect: false },
// 				{ answerText: '6', isCorrect: false },
// 				{ answerText: '7', isCorrect: true },
// 			],
// 		},
// 	];

// return (
//   <>
//   <div className="question-text">{questions[0].questionText}</div><div className="answer-section">
//     {questions[0].answerOptions.map((answerOption, index) => (
//       <button>{answerOption.answerText}</button>


//     ))}
//   </div>
//   </>
// )
//     }
  

import './App.css';
import React from 'react'
import Quizzes from './Quiz'
function App() {
  return (
    <div className="App">
      
     
     
     <Quizzes/>
    </div>
  );
}

export default App;

