import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image', image);

        axios.post('http://localhost:5000/items/add', formData)
            .then(res => console.log(res.data));

        setName('');
        setDescription('');
        setImage(null);
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
                    <label>Image: </label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
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
