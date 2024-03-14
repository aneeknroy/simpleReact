import React, { Component } from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'


// TODO list features

/*
    1. Edit Feature (DONE)
    2. Mark Todo Items as complete
    3. Due Dates & Priority Status
    4. Multiple todo lists
    5. Drag & Drop Reordering
    6. Search and Filter
    7. User Authentication & Sharing


*/

// Define a class component named TodoList that extends Component
class TodoList extends Component {
    // Initialize state with an array todos to store todo items and newTodo to store the value of the new todo input
    state = {
        todos: [],
        newTodo: ''
    };

    // Method to handle input change in the new todo input field
    handleInputChange = event => {
        // Update the state with the new value typed in the input field
        this.setState({ newTodo: event.target.value });
    }


    // Method to add a new todo item to the todos array    
    handleAddTodo = () => {
        // Destructure todos and newTodo from state
        const { todos, newTodo } = this.state;

        // Check if the new todo is not empty (trimmed value)
        if (newTodo.trim() !== ''){
            // If not empty, add the new todo to the todos array in state and reset the newTodo state
            this.setState({
                todos: [...todos, newTodo],
                newTodo: ''
            });
        }
    };

    // Method to delete a todo item from the todos array    
    handleDeleteTodo = index => {
        // Destructure todos from state
        const { todos } = this.state;

        // Create a copy of todos array
        const updatedTodos = [...todos];

        // Remove the todo item at the specified index from the copied array
        updatedTodos.splice(index, 1);

        // Update the state with updated todos array
        this.setState({ todos: updatedTodos });
    };

    handleEditTodo = (index, newText) => {
        // Destructure todos from state
        const { todos } = this.state;

        const updatedTodos = [...todos];

        updatedTodos[index] = newText;

        this.setState({ todos: updatedTodos});
    }

    // Render method to render the TodoList component
    render() {
        // Destructure todos and newTodo from state
        const { todos, newTodo } = this.state;

        // Return JSX to render the TodoList component
        return (
            <div className="todo-list-container">

                <h2>Todo List</h2>

                <input
                    type="text"
                    value={newTodo}
                    onChange={this.handleInputChange} // Call handleInputChange when input value changes
                />

                <button className="todo-button" onClick={this.handleAddTodo}>Add Task</button>
                
                <div className="todo-list">
                    {todos.map((todo, index) => (
                        <div className="todo-item" key={index}>
                            <span>{todo}</span>
                            <button className="todo-delete" onClick={() => this.handleDeleteTodo(index)}>Delete</button>
                            
                            <button className="todo-edit" onClick={() => {
                                const newText = prompt("Enter new item", todo);
                                if (newText !== null) {
                                    this.handleEditTodo(index, newText);
                                }
                            }}>Edit</button> 

                        </div>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default TodoList;