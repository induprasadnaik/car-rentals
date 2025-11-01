// src/pages/Products.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function About() {
  
  return (
    <div>
      <section class="bg-gray-900 text-white py-20">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">About Car Rentals</h1>
          <p class="text-gray-300 text-lg md:w-3/4 mx-auto">
            Your trusted partner for premium, affordable, and reliable car rentals across the city.
          </p>
        </div>
      </section>

      
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 md:flex md:items-center md:space-x-10">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a" 
                alt="Car Rental Fleet"
                class="rounded-2xl shadow-lg w-full"/>
          </div>
          <div class="md:w-1/2">
            <h2 class="text-3xl font-semibold mb-4">Who We Are</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Founded in 2015, Car Rentals has become one of the most trusted names in vehicle leasing and transportation services. We provide customers with well-maintained, fully insured vehicles that suit every need — from luxury sedans to family SUVs.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Our goal is simple: to make your travel experience smooth, safe, and enjoyable — whether it’s for a weekend getaway, business trip, or city commute.
            </p>
          </div>
        </div>
      </section>

      
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-semibold mb-8">Our Mission & Vision</h2>
          <div class="grid md:grid-cols-2 gap-8 text-left">
            <div class="bg-white p-8 rounded-2xl shadow-md">
              <h3 class="text-2xl font-semibold mb-3 text-indigo-600">Our Mission</h3>
              <p class="text-gray-600 leading-relaxed">
                To redefine urban travel by offering flexible, affordable, and reliable car rental services that cater to both personal and corporate clients.
              </p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-md">
              <h3 class="text-2xl font-semibold mb-3 text-indigo-600">Our Vision</h3>
              <p class="text-gray-600 leading-relaxed">
                To become the most customer-centric car rental company in the region, known for innovation, transparency, and outstanding service.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </div>
    
  );
}

export default About;
