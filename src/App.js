import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivestockPage from "./LivestockPage";
import CartCheckoutPage from "./CartCheckoutPage";
import AdminPanel from "./AdminPanel";

export default function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="mb-6 space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Livestock</Link>
          <Link to="/cart" className="text-blue-600 hover:underline">Cart</Link>
          <Link to="/admin" className="text-blue-600 hover:underline">Admin</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LivestockPage />} />
          <Route path="/cart" element={<CartCheckoutPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}
