import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductShowcase from "./components/ProductShowcase";
import PasteUrl from "./components/PasteUrl";
import FaQ from "./components/FaQ";
import GetLink from "./components/GetLink";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/Signup";
import Analytics from "./Pages/Analytics";
import Qrcode from "./Pages/Qrcode";

const RoutesComponent = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/qrcode" element={<Qrcode />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <ProductShowcase />
      <PasteUrl />
      <FaQ />
      <GetLink />
    </>
  );
};

export default RoutesComponent;
