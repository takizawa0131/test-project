import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { TextField, Button } from '@mui/material';

interface Todo {
    id: number;
    text: string;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo('');
    };

    return (
        <div>
            <TextField
                label="New Todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button onClick={addTodo}>Add</Button>
            <div>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;