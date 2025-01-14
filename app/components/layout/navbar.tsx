"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import img from "@/public/android-chrome-192x192.png";
import AnimatedRoutes from "@/app/animatedRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <AnimatedRoutes>
      <button id="menu" title="menu" className="block mx-auto lg:hidden">
        <FontAwesomeIcon icon={faBars} onClick={handleClick} />
      </button>
      {menuOpen && (
        <nav className="bg-black rounded-t-xl mt-10 py-2 text-white shadow-xl flex flex-col items-center md:flex-row justify-around text-2xl visible w-full">
          <Link
            href="/about"
            className="flex items-center justify-between px-4 my-1 text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-between px-4 my-1 text-white"
          >
            Contact
          </Link>
          <Link href="/" className="flex items-center justify-between my-1 px-4">
            <Image
              src={img}
              alt="Texas WebGems: Putting the Diamond in Your Rough"
              width={80}
              height={32}
            />
          </Link>
          <Link
            href="/blog"
            className="flex items-center justify-between px-4 my-1 text-white"
          >
            Blog
          </Link>
          <Link
            href="https://gemafawell.contra.com"
            className="flex items-center justify-between px-4 my-1 text-white"
          >
            Portfolio
          </Link>
        </nav>
      )}
    </AnimatedRoutes>
  );
}
