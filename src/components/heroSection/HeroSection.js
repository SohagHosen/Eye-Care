import React from "react";
import { useHistory } from "react-router-dom";
import banner from "../../assets/images/banner.png";
function HeroSection() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/about");
  };
  return (
    <div className="container px-3 md:px-0 mx-auto mt-14">
      <div className="md:flex gap-x-2">
        <main className="md:w-1/2  flex justify-center items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-6xl">
              <span className=" xl:inline">We Only Give Best Care To </span>
              <span className=" text-indigo-600 xl:inline">Your Eyes</span>
            </h1>
            <p className="mt-3  text-gray-500 sm:mt-5  sm:max-w-xl sm:mx-auto md:mt-5  lg:mx-0">
              Eyes are organs of the visual system. They provide animals with
              vision, the ability to receive and process visual detail, as well
              as enabling several photo response functions that are independent
              of vision.
            </p>
            <button
              onClick={handleClick}
              className="bg-indigo-500 px-4 py-2 uppercase font-bold text-white mt-3 rounded"
            >
              About US
            </button>
          </div>
        </main>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            style={{ maxHeight: "500px" }}
            className=" w-auto  md:h-96 lg:w-auto lg:h-full"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
