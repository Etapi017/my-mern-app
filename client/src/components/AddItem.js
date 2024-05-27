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
            .then(res => {
                console.log(res.data);
                setName('');
                setDescription('');
                setImage(null);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div>
            <h3>Add New Item</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image: </label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Item" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;
