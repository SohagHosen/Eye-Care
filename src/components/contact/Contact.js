import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import "./contact.css";
function Contact() {
  return (
    <>
      <section className="header flex justify-center items-center">
        <h1 className="text-5xl md:text-9xl text-white font-extrabold">
          Contact US
        </h1>
      </section>
      <section
        style={{ height: "400px" }}
        className=" md:flex justify-center items-center "
      >
        <section class="w-full md:w-2/5 text-center md:text-left my-10 md:my-0">
          <div>
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
        <form class="w-full md:w-2/5">
          <div class=" px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div class=" px-3 mt-5">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Your Message
            </label>
            <textarea
              class="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              rows="3"
              placeholder="Enter some long form content."
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
