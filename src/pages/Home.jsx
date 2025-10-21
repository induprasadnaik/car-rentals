// src/pages/Products.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import Banner from "../components/banner";

function Home() {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const cars = [
    { id: 1, name: "Ford Figo", price: 300, image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg' },
    { id: 2, name: "Maruthi Eeco", price: 200, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSF6-cN2vrGMkNyGUt0wA9bgih4dqr1zjvrKT6R5T9XsON8fQ7pEMTXx0-t6p102qWnvIQ2lUVAIoIe3ILaiypFFhEly0S9JCWVMQuBXpZ4SA' },
    { id: 3, name: "Maruthi Swift", price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsx4U2683WFrnWozERcOmz6T3h00sR2vWaGw&s' },
    { id: 4, name: "Ertiga", price: 300, image: 'https://www.varunmaruti.com/uploads/products/colors/ertiga-pearl-midnight-black.png' },
    { id: 5, name: "Toyota Glansa", price: 300, image: 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/113027/glanza-facelift-front-view.jpeg?isig=0&q=80' },
    { id: 6, name: "Kia Seltos", price: 300, image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/174323/seltos-exterior-right-front-three-quarter-3.jpeg' },
  ];

  return (
    <div>
      <Banner />
        <div className="p-6 mt-5">
        {/* Navbar with Cart Icon */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-center w-[100%]">Cars Rentals</h1>
          
        </div>

        {/* Product List */}
        <div className="grid grid-cols-3 gap-4">
          {cars.map((p) => (
            <div key={p.id} className="borderrounded shadow overflow-hidden shadow-5xs">
              <img src={p.image} className="w-[100%]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
              <div className=" p-4 ">
                <h2 className="font-semibold">{p.name}</h2>
                <p>₹{p.price} per Hr</p>
                <button
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => dispatch(addToCart(p))}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Home;
