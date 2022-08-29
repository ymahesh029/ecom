import React from "react";
import Anousment from "./components/Anousment";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categorie from "./components/Categories";
import Products from "./components/Products";

const Home = () => {
  return (
    <div>
      <Anousment />
      <Navbar />
      <Slider />
      <Categorie />
      <Products />
    </div>
  );
};

export default Home;
