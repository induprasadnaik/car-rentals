// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ErrorPage() {
 return (
    <div className="p-6">
      
    </div>
  );
}

export default ErrorPage;
