import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import Register from './components/Register';
import Login from './components/Login';
import AdminActions from './components/AdminActions';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ItemList />} />
                    <Route path="/add" element={<AddItem />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/admin" element={<AdminActions token={token} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
