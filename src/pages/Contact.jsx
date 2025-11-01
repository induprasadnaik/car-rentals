// src/pages/Products.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Contact() {
  
  return (
    <div>
      <section class="bg-gray-900 text-white py-16 text-center">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Have questions about our cars, pricing, or rental process? We’d love to hear from you.
      </p>
    </div>
  </section>

  
  <section class="py-16">
    <div class="container mx-auto px-6 md:flex md:space-x-12">

      
      <div class="md:w-1/2 mb-10 md:mb-0">
        <div className=" md:sticky md:top-24">
          <h2 class="text-3xl font-semibold mb-6 text-indigo-600">Contact Information</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold">📍 Address</h3>
              <p class="text-gray-600 mt-2">
                <b>Naik's Car Rentals</b><br/>
                MG Road, Kochi, Kerala, India - 682016
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">📞 Phone</h3>
              <p class="text-gray-600 mt-2">
                +91 00000 00000
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold">📧 Email</h3>
              <p class="text-gray-600 mt-2">
                carrentals@domain.com
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div class="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
        <form class="space-y-5">
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  </section>
    </div>
    
  );
}

export default Contact;
