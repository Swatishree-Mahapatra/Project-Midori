import React from "react";
import Hero2 from "./Hero2";
import About from "../assets/About.jpg";
import Features from "../assets/Features.jpg";
import Leader from "../assets/Leaderboard.jpg";
import Footer from "../assets/Footer.jpg";
const Home = () => {
  return (
    <>
    <Hero2 />
    <img src={About}/>
    <img src={Features}/>
    <img src={Leader}/>


    </>
  );
};

export default Home;
