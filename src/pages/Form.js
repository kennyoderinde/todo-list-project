import React from 'react'
import "../App.css"

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)

    }
    const submitTodoHandlers = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000},
        ])

        setInputText(""); 
    };


    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" className="todo-input" />
            
            <button onClick={submitTodoHandlers} className="todo-btn"><i class="fa fa-circle-o-notch" aria-hidden="true"></i>
            </button>
            <div className="select">
                <select onChange= {statusHandler} name="todos"  className="filter-todo">
                    <option>All</option>
                    <option>Completed</option>
                    <option>Uncompleted</option>
                </select>
            </div>
        </form>

    )
}
export default Form