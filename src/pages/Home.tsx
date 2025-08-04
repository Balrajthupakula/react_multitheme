import React, { useEffect, useState } from "react";
import './Home.css'; 

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="home">
      <h1>Welcome to Multi-Theme App</h1>
      <p>Here’s a list of sample products </p>
      <div className="card-grid">
        {products.slice(0, 4).map((product: any) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;