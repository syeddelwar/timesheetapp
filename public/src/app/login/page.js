import Head from "next/head";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";
import Header from "../components/Header";

export default function Index() {
  return (
    <div className="bg-gray-100 ">
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-[10rem]">
        <Head>
          <title> Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid grid-cols-1  items-start justify-items-center  w-full flex-1 px-5 text-center">
          <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-3   max-w-4xl">
            {/* left Side  */}

            <div className="p-5 grid grid-cols-1   col-span-2 ">

              {/* <div className="text-left font-bold">
                <span className="text-green-500"> Company </span>Name
              </div> */}
              <div className="py-10">
                <h2 className="text-3xl font-bold text-[#2C0467] mb-2">
                  Sign in to Account{" "}
                </h2>

                <div className="border-2 w-10 border-[#2C0467] inline-block mb-2">
                  {" "}
                </div>

                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-[#2C0467] rounded-full p-3 mx-1"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-[#2C0467] rounded-full p-3 mx-1"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-[#2C0467] rounded-full p-3 mx-1"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                <p className="text-gray-400 my-3">
                  {" "}
                  or use your email account{" "}
                </p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>

                  <div className="flex  justify-between w-64 mb-5">
                    <label className="flex items-center text-xs ">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember me{" "}
                    </label>
                    <a href="#" className="text-xs">
                      Forgot password?
                    </a>
                  </div>
                  <a
                    href="#"
                    className="border-2 border-[#2C0467] text-[#2C0467]  rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#2C0467]  hover:text-white"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>

              {/* Right  Side  */}

            <div className=" bg-[#2C0467] text-blue-gray-900 rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2 text-white">
                {" "}
                Hell0 , Friend{" "}
              </h2>

              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <p className="mb-10 text-white">
                Fill Up personal information and star journey with us.{" "}
              </p>

              <a
                href="#"
                className="border-2 text-white border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-gray-900 hover:text-green-500"
              >
                Sign Up{" "}
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
