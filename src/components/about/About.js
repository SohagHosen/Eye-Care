import React from "react";
import { MdDone } from "react-icons/md";
import "./about.css";
import doctor from "../../assets/images/doctor.jpg";
function About() {
  return (
    <>
      <section className="about-header flex justify-center items-center">
        <h1 className="text-5xl md:text-9xl text-white font-extrabold text-indigo-500">
          About US
        </h1>
      </section>
      <section className="md:flex my-10">
        <div className="w-full mx-3 md:w-1/2">
          <img src={doctor} alt="" />
        </div>
        <div className="w-full mx-3 md:w-1/2 flex items-center">
          <article>
            <h4 className="text-xl">About US</h4>
            <h1 className="text-xl md:text-4xl mt-3 font-bold text-indigo-600">
              We Are Caring For Your Eye Health Hospital
            </h1>
            <div className="grid lg:grid-cols-2">
              <div className="mt-5 flex">
                <div className="h-10 w-10 flex justify-center items-center rounded bg-blue-100 mr-3 items-center">
                  <MdDone className="inline-block text-2xl" />
                </div>
                <p className="font-bold flex items-center">
                  Conducts eye health checkups
                </p>
              </div>
              <div className="mt-5 flex">
                <div className="h-10 w-10 flex justify-center items-center rounded bg-blue-100 mr-3 items-center">
                  <MdDone className="inline-block text-2xl" />
                </div>
                <p className="font-bold flex items-center">Special eye exam</p>
              </div>
              <div className="mt-5 flex">
                <div className="h-10 w-10 flex justify-center items-center rounded bg-blue-100 mr-3 items-center">
                  <MdDone className="inline-block text-2xl" />
                </div>
                <p className="font-bold flex items-center">
                  Best lasik treatment
                </p>
              </div>
              <div className="mt-5 flex">
                <div className="h-10 w-10 flex justify-center items-center rounded bg-blue-100 mr-3 items-center">
                  <MdDone className="inline-block text-2xl" />
                </div>
                <p className="font-bold flex items-center">
                  Contact lens service
                </p>
              </div>
              <div className="mt-5 flex">
                <div className="h-10 w-10 flex justify-center items-center rounded bg-blue-100 mr-3 items-center">
                  <MdDone className="inline-block text-2xl" />
                </div>
                <p className="font-bold flex items-center">
                  Treats minor illnesses
                </p>
              </div>
              <div className="mt-5 flex">
                <div className="h-10 w-10 flex justify-center items-center rounded bg-blue-100 mr-3 items-center">
                  <MdDone className="inline-block text-2xl" />
                </div>
                <p className="font-bold flex items-center">
                  Special Retina exam
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
