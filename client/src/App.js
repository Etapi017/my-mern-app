import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ItemList />} />
                    <Route path="/add" element={<AddItem />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
