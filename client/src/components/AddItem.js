import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name,
            description,
        };

        axios.post('http://localhost:5000/items/add', newItem)
            .then(res => console.log(res.data));

        setName('');
        setDescription('');
    };

    return (
        <div>
            <h3>Add New Item</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;
