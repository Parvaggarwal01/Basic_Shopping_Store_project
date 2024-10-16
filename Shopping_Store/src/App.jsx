import React from "react";

function App() {
  return (
    <div className="h-screen w-screen flex">
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
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-300"></span>
            Cat 1
          </li>
          <li className="mb-3 flex items-center ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-300"></span>
            Cat 1
          </li>
          <li className="mb-3 flex items-center ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-300"></span>
            Cat 1
          </li>
        </ul>
      </nav>

      <div className="w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="mr-3 mb-3 card p-5 border shadow rounded w-[18%] h-[33vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 w-full h-[75%] bg-contain bg-no-repeat bg-center mb-3"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">hello hdiuwehfui</h1>
        </div>
           
      </div>
    </div>
  );
}

export default App;
