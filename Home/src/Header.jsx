import React from "react";
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";
import { Link } from "react-router-dom";

const Header = ({ app }) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bc">
      <div className="flex">
        <div className="flex-grow">
          <Link to="/">Fidget spinner world II</Link>
          <span className="mx-3" />
          <Link to="/cart">Cart</Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
