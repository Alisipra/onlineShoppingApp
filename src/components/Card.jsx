import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Card({ content, cart, setCart }) {
  const addToCart = (id, price, title, description, imgSrc) => {
    let obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
  };

  return (
    <>
      <div className="grid  grid-cols-3">
        <div className="shadow-2xl w-[300px] h-[500px]">
          <Link to={`/product/${content.id}`} className="h-[300px]">
            <img src={content.imgSrc} alt="" />
          </Link>
          <div className="text-center text-black font-bold m-4">
            <div>{content.title}</div>
            <div>{content.description}</div>
            <button
              className="bg-blue-600 p-3 rounded
            text-white cursor-pointer
          "
            >
              {content.price} Rs
            </button>
            <button
              className="bg-yellow-400 p-3 rounded m-3 cursor-pointer"
              onClick={() =>
                addToCart(
                  content.id,
                  content.price,
                  content.title,
                  content.description,
                  content.imgSrc
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
