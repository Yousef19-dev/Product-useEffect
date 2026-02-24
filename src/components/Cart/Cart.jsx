import React from 'react';

export default function Cart({ cartItem, setCartItem }) {
  let total = 0;
  cartItem.forEach((item) => {
    total += item.price;
  });

  function deleteItem(itemToDelete) {
    const updatedCart = cartItem.filter((item) => {
      return item.id !== itemToDelete;
    });
    setCartItem(updatedCart);
  }

  return (
    <div>
      <div className="container w-100 px-1 m-0 d-flex justify-content-center align-baseline row">
        {cartItem.map((Item) => {
          return (
            <div key={Item.id} className="card col-12 col-md-6 col-lg-4">
              <img src={Item.image} alt={Item.title} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{Item.title}</h3>
                <p className="card-text">{Item.description}</p>
                <h4 className="card-text">{Item.price}$</h4>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(Item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <h1>The total price is: {total}$</h1>
      </div>
    </div>
  );
}
