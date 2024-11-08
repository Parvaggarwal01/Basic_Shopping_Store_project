import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [discription, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      discription.trim().length < 5
    ) {
      alert("Each and Every input must have atleast 4 characters");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      discription,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
  };

  return (
    <form
      className="flex flex-col items-center p-[5%] w-screen h-screen"
      onSubmit={AddProductHandler}
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Products</h1>
      <input
        type="url"
        placeholder="image link "
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 border border-zinc-300"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 border border-zinc-300"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3 border border-zinc-300"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3 border border-zinc-300"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="enter product description here...."
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 border border-zinc-300"
        rows="10"
        onChange={(e) => setdescription(e.target.value)}
        value={discription}
      ></textarea>
      <div className="w-1/2">
        <button className=" py-3 px-5 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
