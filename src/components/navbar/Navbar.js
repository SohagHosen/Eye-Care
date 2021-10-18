import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const { user, logOut } = useAuth();
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <>
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
          {user.email ? (
            <div className="md:order-last inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
              <div className="bg-gray-900 text-white flex items-center justify-center h-8 text-sm rounded-full">
                <span className="px-3  font-bold">{user.displayName}</span>
                {user?.photoURL && (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                )}
              </div>
              <div className="mx-5 flex items-center">
                <button onClick={logOut}>
                  <IoMdLogOut className="text-3xl" />
                </button>
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
                exact
                to="/doctors"
                activeClassName="bg-gray-900 hover:bg-gray-900"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Doctors
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="bg-gray-900 hover:bg-gray-900"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
              >
                About US
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="bg-gray-900 hover:bg-gray-900"
                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white"
              >
                Contact US
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
