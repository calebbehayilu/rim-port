import { storage } from "@/pages/utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";

const ImageSlider = () => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);

  const imageListRef = ref(storage, "/");

  useEffect(() => {
    const getImage = () => {
      listAll(imageListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImage((prev) => [...prev, url]);
            setLoading(false);
          });
        });
      });
    };
    getImage();
  }, []);

  console.log(image);

  return (
    <div className="text-white flex justify-center mt-4">
      {loading === true ? (
        <h1>Loading . . . </h1>
      ) : (
        <div className="">
            <h1 className="font-semibold text-2xl justify-items-center">Here are some of my photos</h1>
          <Carousel className="max-w-md lg:max-w-xl">
            {image?.map((img, index) => (
              <div key={index} className="rounded-xl md:px-10 ">
                <img className="object-cover md:px-8 lg:px-8" src={img} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
