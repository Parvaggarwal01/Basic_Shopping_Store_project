import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit() {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });

  const ChangeHander = (e) => {
    // console.log(e.target.name, e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and Every input must have atleast 4 characters");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);

    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };

    console.log(copyData);

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    toast.info("Product Updated Successfully");
    navigate(-1);
  };

  return (
    <form
      className="flex flex-col items-center p-[5%] w-screen h-screen"
      onSubmit={AddProductHandler}
    >
      <h1 className="text-3xl w-1/2 mb-5">Edit Product</h1>
      <input
        type="url"
        placeholder="image link "
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 border border-zinc-300"
        name="image"
        onChange={ChangeHander}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 border border-zinc-300"
        name="title"
        onChange={ChangeHander}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3 border border-zinc-300"
          name="category"
          onChange={ChangeHander}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3 border border-zinc-300"
          name="price"
          onChange={ChangeHander}
          value={product && product.price}
        />
      </div>
      <textarea
        placeholder="enter product description here...."
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 border border-zinc-300"
        rows="10"
        name="description"
        onChange={ChangeHander}
        value={product && product.description}
      ></textarea>
      <div className="w-1/2">
        <button className=" py-3 px-5 border rounded border-blue-200 text-blue-300">
          Edit Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
