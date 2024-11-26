import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <Link to="/create">Create New Item</Link>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
