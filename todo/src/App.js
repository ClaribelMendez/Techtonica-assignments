import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './todo';

const App = () => {
  // Declare a new state variable, which we'll call "todo"
  const [todos, setTodos] = useState([
    { text: "Walk dog", isCompleted: false },
    { text: "Feed cat", isCompleted: false },
  ]);

  const toggleTodo = (index) => {
    // use spread operator to grab the current list of items
    const newTodos = [...todos];
    // toggle isComplete
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    // setTodos to update that state.
    setTodos(newTodos);
  };
  
  return (
    <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
    </div>
  </div>
  );
};

export default App;
