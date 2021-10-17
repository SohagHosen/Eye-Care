import React from "react";
import banner from "../../assets/images/banner.png";
function HeroSection() {
  return (
    <div class=" container mx-auto mt-14">
      <div class="flex">
        <main class="w-1/2  flex justify-center items-center">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">We Only Give Best Care To </span>
              <span class="block text-indigo-600 xl:inline">Your Eyes</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Eyes are organs of the visual system. They provide animals with
              vision, the ability to receive and process visual detail, as well
              as enabling several photo response functions that are independent
              of vision.
            </p>
            <button class="bg-indigo-500 px-4 py-2 uppercase font-bold text-white mt-3">
              About US
            </button>
          </div>
        </main>
        <div className="w-1/2 flex justify-center">
          <img
            style={{ height: "500px" }}
            class="h-32 w-auto object-cover sm:h-72 md:h-96 lg:h-96"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
