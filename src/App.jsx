import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchItem from "./components/SearchItem";
import { useState } from "react";
import { items } from "./components/Data";
function App() {
  let [data, setData] = useState([...items]);
  let [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar setData={setData} cart={cart} />
        {/* <Home /> */}
        <Routes>
          <Route
            path="/"
            element={<Home cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<SearchItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
