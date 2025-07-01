import React from "react";
import "./Carousel.css";
import carousel1 from "../../assets/carousel/ammuseumLogo.jpg";
import carousel2 from "../../assets/carousel/carousel2.jpg";
import carousel3 from "../../assets/carousel/carousel3.jpg";

function Carousel() {
    const images = [carousel1, carousel2, carousel3];


    return (
        <div className="carouselDiv">
            <div className="carouselContainer">
                    {images.map((image, index) => (
                        <div key={index} className="carouselContainerIn">
                            <img src={image} className="carouselImg"/>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Carousel;
