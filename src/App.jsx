// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Cars";
import Cart from "./pages/Cart";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>        
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
