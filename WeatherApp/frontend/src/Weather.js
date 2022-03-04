import React, { useState} from 'react';

function Weather (props) {
    const [temp, setTemp] = useState('not yet gotten');
    return (
        <div>
            <button>Get weather in Brooklyn</button>
            <h1>This is the temperature {props.temp}</h1>
        </div>
    )
}




export default Weather