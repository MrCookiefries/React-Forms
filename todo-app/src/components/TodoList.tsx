import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Todo, { TodoObj } from "./Todo";
import NewTodoForm, { IFormData } from "./NewTodoForm";
import "./TodoList.scss";

const TodoList = () => {
    const initialState: TodoObj[] = [{id: uuidv4(), task: "finish todo app", completed: false}];
    const [todos, setTodos] = useState(initialState);

    function addTodo({task}: IFormData) {
        const newTodo: TodoObj = {
            task,
            id: uuidv4(),
            completed: false
        };
        setTodos(oldData => [...oldData, newTodo]);
    }

    function removeTodo(id: string) {
        setTodos(oldData => oldData.filter(t => t.id !== id));
    }

    function toggleCompleted(id: string) {
        setTodos(oldData => {
            const dataCopy = oldData.map(t => ({...t}));
            for (const t of dataCopy) {
                if (t.id === id) {
                    t.completed = !t.completed;
                    break;
                }
            }
            return dataCopy;
        });
    }

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo} />
            {todos.map(t => <Todo data={t} key={t.id} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />)}
        </div>
    );
};

export default TodoList;
