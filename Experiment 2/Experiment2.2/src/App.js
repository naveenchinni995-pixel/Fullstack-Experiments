import React, { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000 },
    { id: 2, name: "Phone", category: "Electronics", price: 30000 },
    { id: 3, name: "Shoes", category: "Fashion", price: 2000 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 800 },
    { id: 5, name: "Book", category: "Education", price: 500 }
  ];

  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter(p => p.category === filter);

  return (
    <div className="container">
      <h1>Dynamic Product Filter</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Education">Education</option>
      </select>

      <div className="grid">
        {filteredProducts.map(product => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;