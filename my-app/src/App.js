import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'
require('./style.css')

class App extends React.Component {
  constructor() {
    super()
    this.state = { todosData }
  }

  render() {
    const todoItems = this.state.todosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App