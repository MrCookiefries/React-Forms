import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./NewTodoForm.scss";

export interface IFormData {
    task: string;
}

const NewTodoForm = ({addTodo}: {addTodo: Function}) => {
    const initialState: IFormData = {task: ""};
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        const {name, value} = evt.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    function handleSubmit(evt: SyntheticEvent) {
        evt.preventDefault();
        addTodo(formData);
        setFormData(() => initialState);
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label>
                Task
                <input
                    type="text"
                    name="task"
                    value={formData.task}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={100}
                    required
                />
            </label>
            <button type="submit">Create</button>
        </form>
    );
};

export default NewTodoForm;
