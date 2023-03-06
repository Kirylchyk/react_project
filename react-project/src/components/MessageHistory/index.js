import React from 'react';
import styles from './MessageHistory.module.css';

function MessageHistory ({messages}) {

    return (
        <ul>
            {messages.map(message => {
                return (
                    <li className={styles.chat} key={message.id}>
                        <div>
                            Author: {message.from.name} {message.time}
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


