import React, {useState} from "react";

function Counter() {
    const [counter_value, setValue] = useState(0);

    function handleIncrement() {
        setValue((prevValue) => prevValue + 1)
    }

    function handleDecrement(){
        setValue((prevValue) => prevValue - 1)
    }

    return <div>
        <p>{counter_value}</p>
        <button onClick={handleIncrement}>Increase by 1</button>
        <button onClick={handleDecrement}>Decrease by 1</button>
    </div>

    }





export default Counter