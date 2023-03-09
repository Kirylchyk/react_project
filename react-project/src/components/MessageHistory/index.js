import React from 'react';
import styles from './MessageHistory.module.css';

function MessageHistory ({messages}) {

    return (
        <ul className={styles.container}>
            {messages.map(message => {
                return (
                    <li className={styles.chat} key={message.id}>
                        <div className={styles.chat}>
                            <p className={styles.peopleList}> Author: {message.from.name}</p>
                            <p className={styles.messageDataTime}>{message.time}</p>
                        </div>
                        <div className={styles.chat}>
                            Text: {message.text} {message.type}
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}

export default MessageHistory


