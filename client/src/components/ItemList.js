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
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h3>Item List</h3>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item._id} className="list-group-item">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        {item.imageUrl && <img src={item.imageUrl} alt={item.name} style={{ width: '100px' }} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
