import React from "react";

export default function Cart({ cart, setCart }) {
  return (
    <>
      <div>
        <div>
          {cart.length === 0 ? (
            <>
              <h1 className="text-center text-[35px] font-bold font-sans">
                Cart Is Empty
              </h1>
              <p className="text-center">
                {" "}
                <button className="text-center bg-yellow-400 p-2 rounded-md font-bold text-white mx-auto">
                  Continue Shopping
                </button>
              </p>
            </>
          ) : (
            cart.map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex m-[100px] items-center shadow-xl justify-center"
                >
                  <img className="w-[240px] h-[240px]" src={v.imgSrc} alt="" />
                  <div>
                    <h1 className="text-center text-[23px]">{v.title}</h1>
                    <h1 className="text-center text-[23px]">{v.description}</h1>
                    <button className="bg-blue-500 text-white p-3 m-3 rounded-md ">
                      {v.price} Rs
                    </button>
                    <button className="bg-yellow-500 text-white p-3   rounded-md">
                      buy now
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div>
        {cart.length === 0 ? (
          ""
        ) : (
          <p className="text-center">
            <button
              onClick={() => setCart("")}
              className="rounded bg-red-600 font-bold font-sans text-white p-4"
            >
              clear cart
            </button>
          </p>
        )}
      </div>
    </>
  );
}
