import { ChangeEvent, SyntheticEvent, useState } from "react";
import { BoxObj } from "./BoxList";

const NewBoxForm = ({addBox}: {addBox: Function}) => {
    const initialState: BoxObj = {backgroundColor: "#000000", width: 100, height: 100};
    const [formData, setFormData] = useState(initialState);
    
    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    function handleSubmit(evt: SyntheticEvent) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Background Color
                <input
                    name="backgroundColor"
                    type="color"
                    onChange={handleChange}
                    value={formData.backgroundColor}
                />
            </label>
            <label>
                Width
                <input
                    name="width"
                    type="number"
                    min={10}
                    max={1000}
                    onChange={handleChange}
                    value={formData.width}
                />
            </label>
            <label>
                Height
                <input
                    name="height"
                    type="number"
                    min={10}
                    max={1000}
                    onChange={handleChange}
                    value={formData.height}
                />
            </label>
            <button type="submit">Add Box</button>
        </form>
    );
};

export default NewBoxForm;
