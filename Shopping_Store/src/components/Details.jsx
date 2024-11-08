import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../utils/axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

function Details() {
  const navigate = useNavigate()
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getsingleproducts = async () => {
  //   try {
  //       const {data} = await axios.get(`/products/${id}`)
  //       setProduct(data);

  //   } catch (error) {
  //       console.log(error);
  //   }
  // }

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
    // getsingleproducts();
  }, []);

  const ProductDeleteHandler = (id) => {
    const FiltredProducts = products.filter((p) => p.id !== id);
    setProducts(FiltredProducts);
    localStorage.setItem("products", JSON.stringify(FiltredProducts));
    toast.success("Product Deleted Successfully");
    navigate("/");
  };
  const notify = () => toast.error("This is a toast notification !");

  return product ? (
    <div className="w-[70%] flex h-full items-center justify-between m-auto p-[10%]">
      <img
        className="h-[80%] w-[40%] object-contain"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[55%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-500 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3">$ {product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <button
          onClick={() => ProductDeleteHandler(product.id)}
          
          className="py-2 px-5 border rounded border-red-200 text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
