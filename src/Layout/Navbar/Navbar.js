import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";

function Navbar() {
  // const hover = 'hover:text-white transition duration-200 ease-in-out';
  // const Hover = ({ isActive }) => ( isActive ? 'text-white' : hover );
  return (
    <>
      <div className="bg-main text-rare2 shadow-md sticky top-0 z-20 flex flex-row">
        {/* LOGO */}
        <div className=" col-span-1 sm:block hidden cursor-pointer" >
          <img
            src={require("../../assets/logo7.png")}
            alt="logo"
            className="w-full h-24 object-contain"
          />
        </div>
        {/* navbar after logo */}
        <div className="containe mx-auto py-3 px-2 lg:flex lg:gap-52 md:gap-10 flex items-center">
          {/* Search Field */}
          <div className="col-span-3 flex">
            <button type="submit">
              <img
                src={require("../../assets/searchicon.png")}
                alt="Sicon"
                className="pb-2 pr-6 "
              />
            </button>

            <form className="w-auto text-xl items-center text-gray-500 border-b-2 border-white rounded-none flex-btn gap-4 opacity-40 focus-within:opacity-100">
              <input
                type="text"
                placeholder="Search Anime"
                className=" text-lg font-light w-full bg-transparent focus:outline-none text-center focus:text-white"
              />
            </form>
          </div>
          {/* Menus */}
          <div className=" font-extrabold text-xl transition duration-200 justify-between lg:gap-32 md:gap-2 items-center md:flex hidden">
            <NavLink
              to="/home"
              className="hover:text-2xl hover:text-white duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain  "
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              className="hover:text-2xl hover:text-white duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain"
            >
              Explore
            </NavLink>
            <NavLink
              to="/mood"
              className="hover:text-2xl hover:text-white duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain"
            >
              Mood
            </NavLink>
            <NavLink
              to="/watchlist"
              className="hover:text-2xl hover:text-white duration-200 hover:border-b-[3.5px] hover:pb-1 border-submain"
            >
              Watchlist
            </NavLink>
            <NavLink to="/" className=" ">
              <img
                src={require("../../assets/user.png")}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
