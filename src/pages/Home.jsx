import React from "react";
import Anousment from "./components/Anousment";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categorie from "./components/Categories";

const Home = () => {
  return (
    <div>
      <Anousment />
      <Navbar />
      <Slider />
      <Categorie />
    </div>
  );
};

export default Home;
