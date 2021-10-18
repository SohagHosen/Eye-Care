import React, { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiUserPlus, BiUser } from "react-icons/bi";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";

function Login() {
  const auth = getAuth();
  const { setUser, googleSignIn, createUser, signIn } = useAuth();
  const [toggleLogin, setToggleLogin] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, password, name } = data;
    if (toggleLogin) {
      createUser(email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              const user = userCredential.user;
              setUser(user);
              history.replace(from);
              setError("");
            })
            .catch((error) => {
              console.log(error.message);
              setError("The email/password that you've entered is incorrect");
            });
          setError("");
        })
        .catch((error) => {
          console.log(error);
          setError("The email/password that you've entered is incorrect");
        });
    } else {
      signIn(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
          history.replace(from);
          setError("");
        })
        .catch((error) => {
          setError("The email/password that you've entered is incorrect");
        });
    }
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" flex flex-col items-center justify-center my-10">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          {toggleLogin ? "Register a new Account" : "Login To Your Account"}
        </div>
        <button
          onClick={handleGoogleLogin}
          className="relative mt-6 border rounded-md py-2 text-sm text-white bg-indigo-500 hover:bg-indigo-400"
        >
          <span className="absolute left-0 top-0 flex items-center  justify-center h-full w-10 text-white">
            <GrGoogle className="text-xl" />
          </span>
          <span>Login with Google</span>
        </button>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">
              Or Login With Email
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            {toggleLogin && (
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="name"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Your Name:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <BiUser className="text-xl" />
                  </div>

                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    name="name"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col mb-2">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <MdOutlineAlternateEmail className="text-xl" />
                </div>

                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <AiFillLock />
                  </span>
                </div>

                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                />
              </div>
            </div>
            <span className="text-red-500">{error}</span>

            <div className="flex w-full mt-5">
              {toggleLogin ? (
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Register</span>
                  <span>
                    <BsArrowRightCircle />
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Login</span>
                  <span>
                    <BsArrowRightCircle />
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center "
            onClick={() => setToggleLogin(!toggleLogin)}
          >
            <span>
              <BiUserPlus className="text-xl" />
            </span>
            <span className="ml-1">You don't have an account?</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
