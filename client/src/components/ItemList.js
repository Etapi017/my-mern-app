import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/items/')
            .then(response => {
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h3>Item List</h3>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        <p>{item.name}: {item.description}</p>
                        <img src={item.imageUrl} alt={item.name} style={{ width: '200px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
