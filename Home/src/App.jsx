import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

import "remixicon/fonts/remixicon.css";
import "./index.scss";
import MainLayout from "./MainLayout";

ReactDOM.render(<MainLayout />, document.getElementById("app"));
