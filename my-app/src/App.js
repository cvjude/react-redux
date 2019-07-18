import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "Play Mario Cart" }
    ]
  };

  deleteTodo = id => {
    this.setState(prevState => {
      return { todos: prevState.todos.filter(todo => todo.id !== id) };
    });
  };

  addTodo = data => {
    data.id = Math.random();
    this.setState({
      todos: [...this.state.todos, data]
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
