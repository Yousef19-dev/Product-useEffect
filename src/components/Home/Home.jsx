import React, { useEffect, useState } from 'react';

export default function Home({cartItem , setCartItem}) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  function saveItem(product) {
    setCartItem([...cartItem , product ])
  }
  return (
    <div className="container w-100 px-1 m-0 d-flex justify-content-center align-baseline row ">
      {products.map((product) => {
        return (
          <div key={product.id} className="card col-12 col-md-6 col-lg-4">
            <img src={product.image} alt={product.title} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-text">{product.description}</p>
              <h4 className="card-text">{product.price}$</h4>
              <button className='btn btn-primary' onClick={() => saveItem(product)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
