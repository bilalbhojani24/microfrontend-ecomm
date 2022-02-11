import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";
import "./index.scss";
import "remixicon/fonts/remixicon.css";

const App = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Header app={{ name: "CART" }} />
      <CartContent />
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
