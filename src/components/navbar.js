import Link from "next/link";
import NavLink from "@/components/navlink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import OverlayMenu from "@/components/overlay";

const navLink = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#Projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#111111] bg-opacity-90">
      <div className="flex flex-wrap item-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className=" text-2xl md:text-5xl text-white font-semibold"
        >
          🧕👩‍💻
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className=" h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="menu hidden md:block md:w-auto md:p-0 hover:text-white"
          id="navbar"
        >
          <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <OverlayMenu links={navLink} /> : null}
    </nav>
  );
};

export default Navbar;
