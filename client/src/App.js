import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Route path="/" exact component={ItemList} />
                <Route path="/add" component={AddItem} />
            </div>
        </Router>
    );
};

export default App;
