import React from "react";
import "./App.css";
import Carousel from "./Components/Carousel.js";
import Navbar from "../src/Components/Navbar.js";
import Card from "../src/Components/Card.js";
import Footer from "../src/Components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
