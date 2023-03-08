import React from 'react';
import styles from './ShopCard.module.css';

function ShopCard({item}) {

    return (
        <ul className={styles.container}>
            {/*{item.map(item => <li key={item.id}>{item.brand}</li>)}*/}
            {/*{item.map(item => <li key={item.id}>{item.title}</li>)}*/}
            {/*{item.map(item => <li key={item.id}>{item.description}</li>)}*/}
            {/*{item.map(item => <li key={item.id}>{item.descriptionFull}</li>)}*/}
            {/*{item.map(item => <li key={item.id}>{item.price}</li>)}*/}
            {/*{item.map(item => <li key={item.id}>{item.currency}</li>)}*/}
            {item.map(item => <li key={item.id}>{Object.entries(item)}</li>)}
        </ul>

    );

}


export default ShopCard;