import React from 'react';
import styles from './Greeting.module.css';

function Greeting() {
    return (
        <div className={styles.container}>
        <h1 className={styles.text}>Hello World</h1>
        </div>
    );
}


export default Greeting;