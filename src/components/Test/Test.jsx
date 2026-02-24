import React from 'react';

export default function Test() {
  const inventory = [
    { id: 1, item: 'Mouse', price: 20 },
    { id: 2, item: 'Laptop', price: 1000 },
    { id: 3, item: 'Keyboard', price: 50 },
  ];

  let idToDelete = 2
  let updatedInventory = inventory.filter((item) => {
    return item.id !== idToDelete
  });
  console.log(updatedInventory);

  return <div></div>;
}
