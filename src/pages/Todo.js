import React from "react";
import "../App.css"

const Todo = ({ text, todo, todos, setTodos}) => {
//Events

const deleteHandler = () => {
   
    setTodos(todos.filter((element) => element.id !== todo.id));

}

const completeHandler = () => {
    setTodos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,
                }
            }
            return item;
        })
    )
}

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i class="fa fa-check-square-o" aria-hidden="true"></i> Check
            </button> 

            <button  onClick={deleteHandler} className="trash-btn">
            <i class="fa fa-trash" aria-hidden="true"></i> Trash
            </button>           
        </div>

    )
}
export default Todo;