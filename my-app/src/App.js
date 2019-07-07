import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'
require('./style.css')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        style={
          item.completed
            ? {
                fontStyle: 'italic',
                color: '#cdcdcd',
                textDecoration: 'line-through'
              }
            : null
        }
      />
    ))

    return <div className="todo-list">{todoItems}</div>
  }
}

export default App
