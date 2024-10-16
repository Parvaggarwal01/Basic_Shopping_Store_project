import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav />
      <div className="w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="mr-3 mb-3 card p-5 border shadow rounded w-[18%] h-[33vh] flex flex-col justify-center items-center"
        >
          <div
            className="hover:scale-110 w-full h-[75%] bg-contain bg-no-repeat bg-center mb-3"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">hello hdiuwehfui</h1>
        </Link>
      </div>
    </>
  );
}

export default Home;
