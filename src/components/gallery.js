import React from "react";

const imgLinks = [
  " /1.jpg",
  " /2.jpg",
  " /3.jpg",
  " /4.jpg",
  " /5.jpg",
  " /6.jpg",
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-5 py-2 ">
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 text-center">My Pictures</h1>
      <div className="-m-1 sm:flex flex-wrap md:-m-2">
        {imgLinks.map((imgs, index) => (
          <div key={index} class="sm:flex sm:w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block w-full rounded-lg object-cover object-center"
                src={imgs}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
