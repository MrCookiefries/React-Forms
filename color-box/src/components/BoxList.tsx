import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export interface BoxObj {
    backgroundColor?: string;
    width?: number;
    height?: number;
    id?: string;
}

const BoxList = () => {
    const initialState: BoxObj[] = [{id: uuidv4(), backgroundColor: "red", width: 100, height: 100}];
    const [boxes, setBoxes] = useState(initialState);

    function addBox(box: BoxObj) {
        const newBox = {...box, id: uuidv4()};
        setBoxes(oldBoxes => [...oldBoxes, newBox]);
    }

    function removeBox(id: string) {
        setBoxes(oldBoxes => oldBoxes.filter(b => b.id !== id));
    }

    return (
        <>
        <NewBoxForm addBox={addBox} />
        {boxes.map(b => <Box key={b.id} data={b} removeBox={removeBox} />)}
        </>
    );
};

export default BoxList;
