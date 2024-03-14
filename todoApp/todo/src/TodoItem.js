import React from 'react';

function TodoItem({ todo, onDelete }) {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}


export default TodoItem;