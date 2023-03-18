import React from 'react';

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Call mom" },
  { id: 4, title: "Feed dog" }
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;