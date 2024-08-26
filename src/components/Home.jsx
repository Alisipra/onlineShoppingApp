import React from "react";
import Card from "./Card";

export default function Home({ items, cart, setCart }) {
  return (
    <div className="grid grid-cols-3 gap-3 mx-3 my-3">
      {items.map((v, i) => {
        return <Card key={i} content={v} cart={cart} setCart={setCart} />;
      })}
    </div>
  );
}
