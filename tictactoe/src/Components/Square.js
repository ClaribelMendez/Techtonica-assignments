import React from 'react'
import '../App.css';

function Square({val,chooseSquare }){

    // need two pieces of information
    // 1. value in the prop -> either an empty string, X or O
    // 2. function to be called when square is clicked
    return (
        <div className="square" onClick={chooseSquare}>{val} </div>
    )
}


export default Square