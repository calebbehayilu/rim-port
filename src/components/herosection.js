import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaInstagram, FaSquareFacebook } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section>
      {/* Hero Section  */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I Am
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Rim",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Hidaya",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
            inventore!
          </p>
          <div className="flex ">
            <button
              className="px-1 py-1 rounded-full bg-transparent bg-gradient-to-br from-blue-500 
           via-purple-500 to-pink-500 hover:bg-slate-800 text-white "
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <div className="flex gap-2">
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
            <div className="flex ">
              <FaLinkedinIn className="mx-2 border rounded-full " size={35} fill="#ffffff" />
              <FaInstagram className="mr-2" size={35} fill="#ffffff" />
              <FaSquareFacebook className="mr-2" size={35} fill="#ffffff" />
            </div>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/image-1.png"}
              width={200}
              height={200}
              alt="image 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
