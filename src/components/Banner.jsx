import React from "react";

const Banner = () => {
  
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Car Rentals
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Explore our car collections and make your journey special.
        </p>
        <a
          href="/about"
          className="bg-stone-600 hover:bg-stone-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Learn More
        </a>
      </div>
      
    </section>
    
  );
};

export default Banner;
