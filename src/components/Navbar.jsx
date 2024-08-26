import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
export default function Navbar({ setData, cart }) {
  let [required, setRequired] = useState("");
  let navigate = useNavigate();
  const filterByCategory = (category) => {
    let element = items.filter((p) => p.category === category);
    setData(element);
  };
  const filterByPrice = (price) => {
    let element = items.filter((p) => p.price >= price);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${required}`);
    setRequired("");
  };
  let location = useLocation();
  return (
    <>
      <div className="flex bg-[#3c40c6] text-white p-1 items-center font-bold sticky top-0">
        <Link to={"/"} className="basis-[30%] text-center text-[45px]">
          <img
            src="../logo.png"
            alt="logo image"
            className="w-[120px] h-[120px]"
          />
        </Link>
        <form onSubmit={handleSubmit} className="basis-[40%]">
          <input
            className="p-2 w-full text-black rounded-md mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
   
      "
            value={required}
            onChange={(e) => setRequired(e.target.value)}
            type="text"
            placeholder="Search Products"
          />
        </form>
        <Link to={"/cart"} className="basis-[30%] text-end ">
          <FaShoppingCart className="w-full text-end text-[25px] cursor-pointer " />

          <span className="absolute top-8 right-[130px] ">{cart.length}</span>
        </Link>
      </div>
      {location.pathname != "/" ? (
        ""
      ) : (
        <div className="bg-[#4bcffa] text-white font-bold p-3 sticky top-[105px]">
          <ul className="flex justify-evenly">
            <li>Filter by {"-->"}</li>
            <li>No Filter</li>
            <li
              className="cursor-pointer"
              onClick={() => filterByCategory("mobiles")}
            >
              Mobile
            </li>
            <li
              className="cursor-pointer"
              onClick={() => filterByCategory("laptops")}
            >
              Laptops
            </li>
            <li
              className="cursor-pointer"
              onClick={() => filterByCategory("tablets")}
            >
              Tablets
            </li>
            <li
              className="cursor-pointer"
              onClick={() => filterByPrice("29999")}
            >
              {">=29999"} Rs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => filterByPrice("49999")}
            >
              {">=49999"} Rs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => filterByPrice("69999")}
            >
              {">=69999"} Rs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => filterByPrice("89999")}
            >
              {">=89999"} Rs
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
