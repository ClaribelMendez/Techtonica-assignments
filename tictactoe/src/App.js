import './App.css';
import { useState } from 'react'
import Square from './Components/Square';

function App() {
  const [board, setBoard] = (["", "", "", "", "", "", "", "", ""]) //start of game will have empty box and change to X or O
  return (
    <div className="App">
      <div className="board"></div>
        <div className="row"></div>
        <Square val = {board[0]} chooseSquare={() => {alert(0)}}/>
        <Square val = {board[1]} chooseSquare={() => {alert(1)}}/>
        <Square val = {board[2]} chooseSquare={() => {alert(2)}}/>

        <div className="row"></div>
        <div className="row"></div>
   </div>
  )
}


export default App;
