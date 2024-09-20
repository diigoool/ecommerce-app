import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, showSearch } = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
          onClick={() => setShowSearch(!showSearch)}
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute pt-4 right-0 bg-white shadow-lg rounded-lg ">
            <div className="flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 cursor-pointer"
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* SideBar Mobile View */}
      <div
        className={`absolute top-0 right-0 bottom-0 h-screen bg-white transition-all overflow-hidden z-10 
          ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            className="py-2 pl-6 border"
            to={"/"}
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to={"/collection"}
            onClick={() => setVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to={"/about"}
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to={"/contact"}
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
