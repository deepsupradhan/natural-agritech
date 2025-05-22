import React, { useState, useEffect } from "react";

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  const updateStatus = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    const whatsappMsg = `Hi ${updatedOrders[index].name}, your order status is now: ${newStatus}.`;
    const phone = updatedOrders[index].phone.replace(/\D/g, "");
    const waUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(waUrl, "_blank");
  };

  return
