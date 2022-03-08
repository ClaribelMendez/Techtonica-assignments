import './App.css';
// import React from 'react'
import { useState} from 'react';
import Form from './Components/Form'
import Item from "./Components/Item"
import Header from './Components/Header'

export default function App() {
  const [items,setItems] = useState([
    { text: "Food" },
    { text: "Bed"},
    { text: "Family"}
  ])

  const addItem = (text) => {
    const newItems = [...setItems, {text}];
    setItems(newItems);
  };



  return (
    <div className="App">
      <Header />
      {items.map((item,index) => (
        <Item key={index} index={index} item={item} />
      ))}
      
        <Form 
          addItem={addItem}
          />
    </div>
  );
}

