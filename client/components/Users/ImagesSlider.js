import React from "react";
import { hot } from "react-hot-loader";
import gymImg from "../../static/gym-img.jpeg";
import gymImg2 from "../../static/gym-img1.jpeg";

const ImagesSlider = () => {
  return (
        <div className="images-slider-container">
            <h1>Ven y entena con nosotros</h1>
            <div className="images">
                <img src={gymImg}/>
                <img src={gymImg2}/>
            </div>
        </div>
  );
};

export default hot(module)(ImagesSlider);
