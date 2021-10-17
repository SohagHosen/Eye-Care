import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
function Footer() {
  return (
    <footer class="px-4 divide-y bg-gray-900 text-white mt-10">
      <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div class="lg:w-1/3">
          <a href="#" class="flex justify-center space-x-3 lg:justify-start">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
              <img src={logo} alt="logo" />
            </div>
            <span class="self-center text-2xl font-semibold">Eye Care</span>
          </a>
        </div>
        <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div class="space-y-3">
            <h3 class="uppercase text-coolGray-900">Quick Access</h3>
            <ul class="space-y-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/doctors">Doctors</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div class="space-y-3 mt-10">
            <ul class="space-y-1">
              <li>Help</li>
              <li>Privacy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="uppercase text-coolGray-900">Developer</h3>
            <ul class="space-y-1">
              <li>Sohag hosen</li>
            </ul>
          </div>
          <div class="space-y-3">
            <div class="uppercase text-coolGray-900">Social media</div>
            <div class="flex justify-start space-x-3">
              <span className="flex items-center p-1">
                <RiFacebookCircleFill className="w-8 h-8 fill-current" />
              </span>
              <span className="flex items-center p-1">
                <AiFillGithub className="w-8 h-8 fill-current" />
              </span>
              <span className="flex items-center p-1">
                <AiFillTwitterCircle className="w-8 h-8 fill-current" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="py-6  text-center text-coolGray-600">
        All rights reserved{" "}
        <span className="font-bold text-indigo-400">Eye Care</span>
      </div>
    </footer>
  );
}

export default Footer;
