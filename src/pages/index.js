import Image from "next/image";

import { Inter, Quicksand } from "next/font/google";
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import ImageSlider from "@/components/image-slide";
import Gallery from "@/components/gallery";
import EmailSection from "@/components/Email";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${quicksand.className} flex min-h-screen flex-col container mx-auto px-12 py-4 `}
    >
      <Navbar />
      <div className="container mt-24 mx-auto py-4">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>        
          <HeroSection />
          <AboutSection />
          <Gallery />
          <EmailSection />
          <Footer />
      </div>
    </main>
  );
}
