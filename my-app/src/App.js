import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"
require('./style.css')

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)

  return (
    <div className="todo-list">
      {todoItems}
    </div>
  )
}

export default App