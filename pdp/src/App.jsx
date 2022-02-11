import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
// import Header from "home/Header";
import "remixicon/fonts/remixicon.css";

const Header = React.lazy(() => import("home/Header"));
import "./index.scss";
import PDPContent from "./PDPContent";

const App = () => {
  return (
    <Router>
      <SafeComponent>
        <div className="text-3xl mx-auto max-w-6xl">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Header app={{ name: "PDP" }} />
          </React.Suspense>
          <div className="my-10">
            <Routes>
              <Route path="product/:id" element={<PDPContent />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </SafeComponent>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
