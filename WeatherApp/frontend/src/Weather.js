import React, { useState, useEffect } from 'react';




function Weather(props) {
    const [temp, setTemp] = useState([]);


    useEffect(() => {
        fetch("/weather").then(
          response => response.json()
        ).then(
          temp => {
            setTemp(temp)
            console.log(temp)
          
          }
        )
    })
      


    return (
        <div>
   
            <p> { JSON.stringify(temp)} </p>
   
              
           
             
            
        </div>
    )
    }



export default Weather;


//   /* <div className="Students">
// <h2>Students</h2>
// <ul>
//     {students.map(student =>
//     <li key={student.id}> { student.firstname} {student.lastname} </li>
//     )}
// </ul>

// </div> */}  {/* {temp['list'].map(info => info.main.temp)} */}
//               {/* { 
//                 if(temp.length > -1){
//                   console.log("hey i made it", info)
//                   return "I am in the map"
//                 }
                
//               } */

