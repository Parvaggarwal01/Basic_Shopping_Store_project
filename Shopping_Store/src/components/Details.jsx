import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getsingleproducts = async () => {
    try {
        const {data} = await axios.get(`/products/${id}`)
        setProduct(data);
        
    } catch (error) {
        console.log(error);
    }
  }

  useEffect( () => {
    getsingleproducts();
  }, [])
  return product ? ( 
    <div className="w-[70%] flex h-full items-center justify-between m-auto p-[10%]">
      <img
        className="h-[80%] w-[40%] object-contain"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[55%]">
        <h1 className="text-4xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-500 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3">$ {product.price}</h2>
        <p className="mb-[5%]">
          {product.description}
        </p>
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default Details;
