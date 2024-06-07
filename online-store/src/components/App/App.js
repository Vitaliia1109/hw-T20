import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import Home from "../../pages/Home/Home.jsx";
import Products from "../../pages/Products/Products.jsx";
import About from "../../pages/About/About.jsx";
import "./App.css";

export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const handleBuy = (price) => {
    setTotalPrice((prevTotal) => prevTotal + price);
    setShowTotalPrice(true);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              handleBuy={handleBuy}
              totalPrice={totalPrice}
              showTotalPrice={showTotalPrice}
              setShowTotalPrice={setShowTotalPrice}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              // handleBuy={handleBuy}
              totalPrice={totalPrice}
              // setTotalPrice={setTotalPrice}
              showTotalPrice={showTotalPrice}
              // setShowTotalPrice={setShowTotalPrice}
            />
          }
        />
      </Routes>
    </div>
  );
}
