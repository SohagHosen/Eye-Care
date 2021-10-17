import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleLogOut, setToggleLogOut] = useState(false);
  const handleLogin = () => {};
  return (
    <header className="bg-gray-800 w-full z-10">
      <nav className="px-2 sm:px-5  md:px-10 flex items-center justify-between flex-wrap  text-white py-3 ">
        <div className="block md:hidden">
          <button
            onClick={() => setToggleNav(!toggleNav)}
            className="flex items-center px-2 py-1 border border-opacity-25 rounded   hover:text-white hover:border-white"
          >
            <HiOutlineMenuAlt1 className="text-2xl" />
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-white md:mr-6">
          <Link to="/">
            <img className="h-10" src={logo} alt="" />
          </Link>
        </div>
        {1 > 0 ? (
          <div className="md:order-last inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
            <div className="bg-gray-900 text-white flex items-center justify-center  text-sm rounded-full">
              <span className=" px-3 font-bold">user name</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://templates.hibootstrap.com/opnix/default/assets/images/doctors/main1.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="text-white md:order-last ">
            <button
              onClick={handleLogin}
              className=" bg-green-500 hover:text-white px-3 py-2 rounded-md"
            >
              Login
            </button>
          </div>
        )}
        <div
          className={`${
            toggleNav ? "block" : "hidden"
          } w-full  flex-grow md:flex md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            <NavLink
              exact
              to="/"
              activeClassName="bg-gray-900 hover:bg-gray-900"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="bg-gray-900 hover:bg-gray-900"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="bg-gray-900 hover:bg-gray-900"
              className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
