import React, { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiUserPlus, BiUser } from "react-icons/bi";
import useFirebase from "../../hooks/useFirebase";
function Login() {
  const { googleSignIn } = useFirebase();
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <div class=" flex flex-col items-center justify-center my-10">
      <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          {toggleLogin ? "Register a new Account" : "Login To Your Account"}
        </div>
        <button
          onClick={googleSignIn}
          class="relative mt-6 border rounded-md py-2 text-sm text-white bg-indigo-500 hover:bg-indigo-400"
        >
          <span class="absolute left-0 top-0 flex items-center  justify-center h-full w-10 text-white">
            <GrGoogle class="text-xl" />
          </span>
          <span>Login with Google</span>
        </button>
        <div class="relative mt-10 h-px bg-gray-300">
          <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span class="bg-white px-4 text-xs text-gray-500 uppercase">
              Or Login With Email
            </span>
          </div>
        </div>
        <div class="mt-10">
          <form action="#">
            {toggleLogin && (
              <div class="flex flex-col mb-6">
                <label
                  for="name"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Your Name:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <BiUser class="text-xl" />
                  </div>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}

            <div class="flex flex-col mb-6">
              <label
                for="email"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <MdOutlineAlternateEmail class="text-xl" />
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <AiFillLock />
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="flex w-full">
              {toggleLogin ? (
                <button
                  type="submit"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span class="mr-2 uppercase">Register</span>
                  <span>
                    <BsArrowRightCircle />
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span class="mr-2 uppercase">Login</span>
                  <span>
                    <BsArrowRightCircle />
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>
        <div class="flex justify-center items-center mt-6">
          <button
            class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center "
            onClick={() => setToggleLogin(!toggleLogin)}
          >
            <span>
              <BiUserPlus class="text-xl" />
            </span>
            <span class="ml-1">You don't have an account?</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
