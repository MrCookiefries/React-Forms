import { BoxObj } from "./BoxList";

const Box = ({data, removeBox}: {data: BoxObj, removeBox: Function}) => {
    const {backgroundColor, width, height, id} = data;

    return (
        <div className="Box">
            <div style={{backgroundColor, width: `${width}px`, height: `${height}px`}}></div>
            <button onClick={() => removeBox(id)} type="button">X</button>
        </div>
    );
};

export default Box;
