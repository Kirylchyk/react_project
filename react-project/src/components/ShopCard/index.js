import React from 'react';

function ShopCard({item}) {

    return (
        <ul>
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