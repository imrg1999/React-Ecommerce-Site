import React, { useEffect, useState, useContext } from 'react'
import ThemeContext from './ThemeContext';

const Product = () => {
  const mode = useContext(ThemeContext);
  const [shop, setShop] = useState([]);
  const [spinner, setSpinner] = useState(true);
  async function fetchStore() {
    try {
    const res = await fetch('https://fakestoreapi.in/api/products');
    const data = await res.json();
    setShop(data);
    } catch(e) {console.log(e)}
    finally{setSpinner(false);}
  }
  useEffect(() => {
    fetchStore();
  }, [])
  
  return (
    <div style={{
        backgroundColor: mode === 'dark' ? '#121212' : '#f4f4f4',
        color: mode === 'dark' ? '#ffffff' : '#121212',
        padding: '2rem',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}>
        <div>
        <h1>Welcome to the Product store</h1>
        </div>
        <div> {spinner? (<h1>Loading...</h1>) : ( Array.isArray(shop) && shop.map((item) => {
          return(
            <div key={item.id}>title: {item.title}</div>
          )
        }))}</div>

    </div>
  )
}

export default Product