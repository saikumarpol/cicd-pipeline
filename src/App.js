import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './ItemList';
import CreateItem from './CreateItem';

function App() {
  return (
    <Router>
      <div>
        <h1>React CRUD SPA</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/create" element={<CreateItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
