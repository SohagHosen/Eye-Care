import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import "./contact.css";
import logo from "../../assets/images/logo.png";
function Contact() {
  return (
    <>
      <section className="header flex justify-center items-center">
        <h1 className="text-5xl md:text-9xl text-white font-extrabold text-indigo-500">
          Contact US
        </h1>
      </section>
      <section
        style={{ height: "400px" }}
        className=" md:flex justify-center items-center "
      >
        <section className="w-full md:w-2/5 text-center md:text-left my-10 md:my-0">
          <div className="">
            <div className="flex justify-center md:justify-start">
              <img src={logo} className="h-16" alt="" />
              <h2 className="text-4xl font-bold text-indigo-600 flex items-center ml-3">
                Eye Care
              </h2>
            </div>
            <p className=" text-2xl">
              <BiLinkAlt className="inline mr-2" />
              www.example.com
            </p>
            <p className=" text-2xl">
              <AiOutlineMail className="inline mr-2" />
              eyecare@email.com
            </p>
            <p className=" text-2xl">
              <HiOutlineLocationMarker className="inline mr-2" />
              Savar Dhaka
            </p>
            <p className=" text-2xl">
              <BsTelephone className="inline mr-2" />
              +8800000000000
            </p>
          </div>
        </section>
        <form className="w-full md:w-2/5">
          <div className=" px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div className=" px-3 mt-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Your Message
            </label>
            <textarea
              className="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              rows="3"
              placeholder="Enter some long form content."
            />
          </div>
          <button className="mx-4 mt-5 bg-indigo-500 py-2 w-32 text-white font-bold rounded">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
