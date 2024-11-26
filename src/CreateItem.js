import React, { useState } from 'react';

function CreateItem() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Created:', { title });
    setTitle(''); // Reset the form
  };

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateItem;
