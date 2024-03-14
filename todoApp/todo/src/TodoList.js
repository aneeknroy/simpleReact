import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    state = {
        todos: [],
        newTodo: ''
    };

    // FUNCTION :  Arrow function & using this to set the newTodo value
    handleInputChange = event => {
        this.setState({ newTodo: event.target.value });
    }

    // FUNCTION :  Adding the todo to the list
    handleAddTodo = () => {
        const { todos, newTodo } = this.state;
        if (newTodo.trim() !== ''){
            this.setState({
                todos: [...todos, newTodo],
                newTodo: ''
            });
        }
    };

    // FUNCTION :  Deleting the todo to the list
    handleDeleteTodo = () => {
        const { todos } = this.state;
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        this.setState({ todos: updatedTodos });
    };


    render() {
        const { todos, newTodo } = this.state;
        return (
            <div>
                <h2>Todo List</h2>
                <input
                    type="text"
                    value={newTodo}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddTodo}>Add Task</button>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        onDelete={() => this.handleDeleteTodo(index)}
                    />
                ))};
            </div>
        );
    }
}

export default TodoList;