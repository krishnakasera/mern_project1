import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Product from "./component/product"; 
import "./App.css";

function App() {
  const [products, setProducts] = useState([]); 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (!name || !price) return;

    const newProduct = {
      id: uuid(),
      name,
      price,
    };

    setProducts([...products, newProduct]); 
    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id)); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      <input
        type="text"
        placeholder="product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      {products.length === 0 ? (
        <p>No Product available</p>
      ) : (
        products.map((item) => (
          <Product
            key={item.id}
            product={item}
            onDelete={deleteProduct}
          />
        ))
      )}
    </div>
  );
}

export default App;
