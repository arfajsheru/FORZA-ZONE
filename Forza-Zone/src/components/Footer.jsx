import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
        <h1 className="text-4xl prata-regular font-bold font" >Forza-Zone</h1>
          <p className="w-full md:w-2/3 text-gray-600">
          Welcome to ForzaZone, where you can find the latest in fashion and technology. 
          Our collection is curated to bring you the best in style and quality.
          <a href="/about" className="text-blue-600 hover:underline"> Learn more</a>.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9913690041</li>
            <li>arfajsheru74@gamil.com</li>
          </ul>
        </div>
      </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center ">Cppyright2024@forzazone.com-All Right Reserved</p>
        </div>

    </div>
  );
};

export default Footer;
