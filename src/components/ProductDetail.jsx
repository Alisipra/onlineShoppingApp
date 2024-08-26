import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "./Data";
import Home from "./Home";

export default function ProductDetail() {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  let [relatedproduct, setRelatedproduct] = useState([]);
  useEffect(() => {
    const filterProduct = items.filter((v, i) => v.id == id);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setRelatedproduct(relatedProducts);
  }, [id, product.category]);

  return (
    <>
      <div className="flex items-center">
        <div className="basis-[50%] flex justify-end ">
          <img className="w-[300px] h-[300px]" src={product.imgSrc} alt="" />
        </div>
        <div className="basis-[50%] p-3 text-center h-auto ">
          <div className="font-bold text-black">{product.title}</div>
          <div>{product.description}</div>
          <button
            className="bg-blue-600 p-3 rounded
            text-white cursor-pointer
          "
          >
            {product.price} Rs
          </button>
          <button className="bg-yellow-400 p-3 rounded m-3 cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-[23px]">Related Products</h1>
        <Home items={relatedproduct} />
      </div>
    </>
  );
}
