import React from "react";
import "./service.css";
function Service({ service }) {
  const { img, title, desc } = service;
  return (
    <div className="w-96 sm:w-84 mx-auto text-gray-900">
      <div>
        <img src={img} alt="service" className=" rounded-lg shadow-md" />

        <div className="relative  px-4 -mt-32">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {title}
            </h4>
            <div className="mt-4">
              <p className="desc text-sm text-gray-600">{desc}</p>
            </div>
            <button className="w-full mt-3 bg-indigo-500 py-2 font-bold text-white rounded">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
