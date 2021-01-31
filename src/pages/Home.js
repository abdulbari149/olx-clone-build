import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import ProductContainer from "../components/Product/ProductContainer";
import AppDetails from "../components/AppDetails/AppDetails";
import Navbar from "../components/Navigation/Navbar";

function Home() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Banner />
      <ProductContainer/>
      <AppDetails />
    </div>
  );
}

export default Home;
