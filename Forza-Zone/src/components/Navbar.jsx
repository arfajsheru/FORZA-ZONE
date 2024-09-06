import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible ] = useState(false);
  const{setShowSearch, getCartCount} = useContext(ShopContext);
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* <img onClick={() => navigate("/")} src={assets.logo} className="w-36" alt="" /> */}
      <h1 className="text-4xl prata-regular font" >Forza-Zone</h1>

      {/* left side */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* action bar */}

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <Link to={'/Login'}><img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile logo"
          /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
            <div className="flex justify-center flex-col gap-2  w-36 px-5 py-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className=" absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>

      {/* Sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 left-0 overflow-hidden scroll-
    bg-gradient-to-r 
    from-[#ffe3fb] via-[#ffffff] to-[#ffe3fb] 
    transition-all 
    ${visible ? 'w-full h-full z-50' : 'w-0 h-0'}`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-3 cursor-pointer">
                  <img className="h-4  text-gray-500" src={assets.dropdown_icon} alt="" />
                  <p className="text-gray-500">Back</p>
            </div>
              <NavLink onClick={() => setVisible(false)} className='py-2 text-black pl-6 border-t' to={"/"}>HOME</NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 text-black pl-6 border-t' to={"/collection"}>COLLECION</NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 text-black pl-6 border-t' to={"/about"}>ABOUT</NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 text-black pl-6 border-t border-b' to={"/contact"}>CONTACT</NavLink>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
