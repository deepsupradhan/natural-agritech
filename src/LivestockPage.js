import React, { useState } from "react";
const initialItems = [
  { id: 1, type: "Goat", name: "Boer", price: 7000 },
  { id: 2, type: "Hen", name: "Country Hen", price: 350 },
  { id: 3, type: "Duck", name: "White Pekin", price: 500 },
  { id: 4, type: "Sheep", name: "Merino", price: 6500 },
  { id: 5, type: "Turkey", name: "Broad Breasted White", price: 900 }
];

export default function LivestockPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Livestock</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {initialItems.map((item) => (
          <div key={item.id} className="border rounded p-4">
            <h3 className="font-semibold">{item.type} - {item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
