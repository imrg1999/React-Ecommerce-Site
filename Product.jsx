import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./Product.css";

const Product = () => {
  const mode = useContext(ThemeContext); // "light" or "dark"
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
        setStatus("ready");
      } catch (err) {
        setStatus("error");
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className={`product-page ${mode}`}>
      <h1> <strong>Welcome to the Product Store</strong> </h1> <hr />

      {status === "loading" && <p>Loading products...</p>}
      {status === "error" && <p>Failed to fetch products.</p>}

      {status === "ready" && (
        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p className="price">${item.price}</p>
              <p className="desc">{item.description}</p>
              <button>View Product</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
