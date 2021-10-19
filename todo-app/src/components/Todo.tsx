import "./Todo.scss";

export interface TodoObj {
    task: string;
    id: string;
    completed: boolean;
}

type TodoProps = {
    data: TodoObj;
    removeTodo: Function;
    toggleCompleted: Function;
}

const Todo = ({data: {task, id, completed}, removeTodo, toggleCompleted}: TodoProps) => (
    <div className="Todo" onClick={() => toggleCompleted(id)}>
        <p className={completed ? "done": ""}>{task}</p>
        <button type="button" onClick={() => removeTodo(id)}>X</button>
    </div>
);

export default Todo;
