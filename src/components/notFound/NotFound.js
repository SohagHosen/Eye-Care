import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="">
      <div className="w-9/12 mt-10 m-auto flex items-center justify-center">
        <div className="border-gray-200 text-center pt-8">
          <h1 className="text-9xl font-bold text-indigo-500">404</h1>
          <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
          <p className="text-2xl pb-8 px-12 font-medium">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <button
            onClick={handleClick}
            className="bg-indigo-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold px-6 py-2 rounded"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
