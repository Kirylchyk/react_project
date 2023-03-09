import React, {useState} from "react";
import styles from "./Counter.module.css"

function Counter() {
    const [counter_value, setValue] = useState(0);

    function handleIncrement() {
        setValue((prevValue) => prevValue + 1)
    }

    function handleDecrement(){
        setValue((prevValue) => prevValue - 1)
    }

    return <div className={styles.container}>
        <p>{counter_value}</p>
        <button className={styles.button} onClick={handleIncrement}>Increase by 1</button>
        <button className={styles.button02} onClick={handleDecrement}>Decrease by 1</button>
    </div>

    }





export default Counter