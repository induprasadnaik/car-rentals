// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <Link to="/" className="text-blue-500 underline">
          ← Back to Products
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {item.name} (x{item.quantity}) — ₹{item.price * item.quantity}
              </span>
              <div className="flex gap-2">
                <button
                  className="bg-green-500 px-2 rounded text-white"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
                <button
                  className="bg-yellow-500 px-2 rounded text-white"
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  -
                </button>
                <button
                  className="bg-red-500 px-2 rounded text-white"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 font-bold text-lg">Total: ₹{totalAmount}</div>

          <button
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
