import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image src="/image-2.jpg" width={400} height={400} alt="pic-2" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About</h1>
          <p className="text-base lg:text-lg">
            I am a clinical pharmacist, a healer of the body and mind. I am a
            alchemist, mixing potions and elixirs to cure the sick and the
            wounded. I am a detective, solving the mysteries of the human body
            and finding the root causes of illness. I am a teacher, educating my
            patients about their health and how to take care of themselves.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
