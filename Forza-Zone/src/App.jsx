import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function App() {
//   const colors = ['red', 'green', 'yellow', 'blue', 'white'];
//   const [currentColor, setCurrentColor] = useState(colors[0]);
//   let currentColorIndex = 0;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       currentColorIndex = (currentColorIndex + 1) % colors.length;
//       setCurrentColor(colors[currentColorIndex]);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

  return (
    <div
      className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] linear-color`}
      // style={{ backgroundColor: currentColor }}
    >
      <ToastContainer autoClose={500} />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
