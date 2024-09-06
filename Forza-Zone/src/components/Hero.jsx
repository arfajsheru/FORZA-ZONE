import React from "react";
import hero1 from "../assets/frontend_assets/hero.jpg";
import hero2 from "../assets/frontend_assets/hero2.jpg";
import hero3 from "../assets/frontend_assets/hero3.jpg";
import hero4 from "../assets/frontend_assets/hero4.jpg";
import hero5 from "../assets/frontend_assets/hero5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const imagePaths = [hero1, hero2, hero3, hero4, hero5];
  return (
    <div className="flex flex-col sm:flex-row  border border-gray-400">
      {/* Hero left side  */}

      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular  text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base ">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* hero right side */}

      <div className="bg-[#dfdcd7] relative w-full sm:w-1/2 flex justify-center items-center">
        <Carousel
       
          showThumbs={false}
          autoPlay={true}
          transitionTime={5}
          infiniteLoop={true}
          showStatus={false}
          stopOnHover={true}
          showArrows={false}
         
        >
          {imagePaths.map((path, index) => (
            <div key={index} className="flex justify-center items-center w-full h-[300px] sm:h-[500px]">
              <img
                className=" contents"
                src={path}alt={`hero img ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
        
      </div>
    </div>
  );
};

export default Hero;