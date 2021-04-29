import React from "react";
import image1 from "../../image/Rectangle12.png";
import image2 from "../../image/Rectangle13.png";
import image3 from "../../image/Rectangle14.png";
import image4 from "../../image/Rectangle15.png";
import image5 from "../../image/Rectangle16.png";
import image6 from "../../image/Rectangle17.png";

import "./collections.css";
const Collections = () => {
  return (
    <section className="collection-container">
      <div className="container-wrapper">
        <h1> Collections</h1>
        <div className="collection">
          <div className="collection-img">
            <img src={image1} alt="collcetion" />
            <p>Accessories</p>
          </div>
          <div className="collection-img">
            <img src={image2} alt="collcetion" />
            <p>Barstools</p>
          </div>
          <div className="collection-img">
            <img src={image3} alt="collcetion" />
            <p>Bed and Beddings</p>
          </div>
          <div className="collection-img">
            <img src={image4} alt="collcetion" />
            <p>Consoles</p>
          </div>
          <div className="collection-img">
            <img src={image5} alt="collcetion" />
            <p>Kitchens</p>
          </div>
          <div className="collection-img">
            <img src={image6} alt="collcetion" />
            <p>Occcasional Chairs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
