import React from "react";

function App() {
  return (
    <div className="h-screen w-screen ">
      <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        <a
          className="py-3 px-5 border rounded border-blue-200 text-blue-300"
          href="/create"
        >
          Add New Products
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
        <ul className=" w-[80%]">
          <li className="mb-3 flex items-center ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-300"></span>Cat 1
          </li>
          <li className="mb-3 flex items-center ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-300"></span>Cat 1
          </li>
          <li className="mb-3 flex items-center ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-300"></span>Cat 1
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
