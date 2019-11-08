import React from "react"
//import ReactDOM from "react-dom"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import './style.css';
import  TodoItem from "./TodoItem"

function App (){
    return (

        <div className="todo-list">
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
        </div>
    )
}

export default App