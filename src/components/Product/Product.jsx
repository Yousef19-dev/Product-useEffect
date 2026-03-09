import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  });

  return (
    <div className='w-100 justify-content-center align-items-center'>
      <div className="card" style={{ width: "100%" }}>
        <img src={singleProduct.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{singleProduct.title}</h5>
          <p className="card-text">{singleProduct.description}</p>
        </div>
      </div>
    </div>
  );
}
