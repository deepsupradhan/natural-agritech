import React, { useState, useEffect } from "react";

export default function CartCheckoutPage() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleWhatsAppOrder = () => {
    const message = `Hello, I would like to order the following:\n` +
      cart.map((item, index) => `${index + 1}. ${item.type} - ${item.name} - ₹${item.price}`).join("\n") +
      `\n\nName: ${name}\nLocation: ${location}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="mb-4">
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.type} - {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="border p-2 mr-2 rounded"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Your Location"
        className="border p-2 mr-2 rounded"
      />
      <button
        onClick={handleWhatsAppOrder}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Place WhatsApp Order
      </button>
    </div>
  );
}
