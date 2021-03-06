import React from "react";
import { useHistory } from "react-router-dom";

import "./service.css";
function Service({ service }) {
  let history = useHistory();
  const { img, title, desc, id } = service;
  const handleServiceDetails = () => {
    history.push(`/service/${id}`);
  };
  return (
    <div className="w-auto sm:w-84 mx-auto text-gray-900">
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
            <button
              onClick={handleServiceDetails}
              className="w-full mt-3 bg-indigo-500 py-2 font-bold text-white rounded"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
