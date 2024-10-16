import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="w-[70%] flex h-full items-center justify-center m-auto py-[10%] px-[5%]">
      <img
        className="h-[70%] w-[50%] object-contain"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content w-[55%]">
        <h1 className="text-4xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-500 my-5">men's clothing</h3>
        <h2 className="text-red-300 mb-3">$ 109.95</h2>
        <p className="mb-[5%]">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300">Edit</Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300">Delete</Link>
      </div>
    </div>
  );
}

export default Details;
