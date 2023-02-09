import "./App.css"
import React, { useState, useEffect } from 'react' 
import Form from "./pages/Form"
import TodoList from "./pages/TodoList"

export default function App() {
  
  //States declaed and initialized
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])


    //USEEFFECT
    useEffect(() => {
      filterHandler();
    }, [todos, status]);

  //Function
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    
  }

  return (
    <div className="main-body">
      <header>
        <h1>Essentials (Todo List) </h1>
      </header>
      <Form 
        inputText = {inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList 
        filteredTodos= {filteredTodos}
        setTodos={setTodos} 
        todos={todos}
        />

    </div>
  )
}
