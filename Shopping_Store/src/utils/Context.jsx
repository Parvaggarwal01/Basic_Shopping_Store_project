import instance from "./axios";
// import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

  // const getProducts = async () => {
  //   try {
  //     const { data } = await instance("/products");
  //     setProducts(data);
  //   //   console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(products);
  

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
