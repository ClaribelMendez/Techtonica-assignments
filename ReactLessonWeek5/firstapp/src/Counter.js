import { useState } from 'react';
import './index.css'
 function Counter(props) {
   const [count, setCount] = useState(0);
 
  return (
    <div>
     
      <button className = "minusButton" onClick = { () => setCount(count - 1)} > {props.signMinus}</button>
      <span>{count}</span>
      <button className = "plusButton" onClick = { () => setCount(count + 1)}>{props.signPlus}</button>
      <button onClick = { () => setCount(0)}>{props.name}</button>
    </div>
  )
}
 
export default Counter