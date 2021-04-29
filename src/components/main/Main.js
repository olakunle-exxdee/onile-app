import React from "react";
import "./main.css";
import image from "../../image/Rectangle9.png";
import image2 from "../../image/Rectangle10.png";
import image3 from "../../image/Rectangle11.png";

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="hero">
          <h1 className="heading">
            Furniture that <br /> everyone <br />
            Loves
          </h1>
          <div className="btn-group">
            <button className="btn btn-white">but now</button>
            <button className="btn btn-black">shop</button>
          </div>
          <div className="main-text">
            <p className="text">
              The Onile is on a mission to design and building minimalistic
              furnitures for Africans across the world.
            </p>

            <button className="btn-shop">our story &#8594;</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-1">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-image-2">
            <img src={image2} alt="hero" />
          </div>
          <div className="hero-image-3">
            <img src={image3} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
