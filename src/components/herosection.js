import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaInstagram, FaSquareFacebook } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section>
      {/* Hero Section  */}
      <div className="flex justify-center ">
        <div className=" place-self-center text-center ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I Am
            </span>
            <br />
            <TypeAnimation
              sequence={["Rim", 2000, "Hidaya", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
          Dedicated pharmacist graduate with a passion for helping patients and improving public health.
          </p>
          <div className="flex flex-col justify-center items-center">
            <button
              className="w-fit px-1 py-1 rounded-full bg-transparent bg-gradient-to-br from-blue-500 
           via-purple-500 to-pink-500 hover:bg-slate-800 text-white "
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <div className="flex ">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </span>
            </button>
            <div className="flex flex-row items-center mt-5">
              <Link href="https://linkedin.com">
                <FaLinkedinIn className="mx-2" size={35} fill="#ffffff" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram className="mr-2" size={35} fill="#ffffff" />
              </Link>
              <Link href="https://facebook.com">
                <FaSquareFacebook className="mr-2" size={35} fill="#ffffff" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
