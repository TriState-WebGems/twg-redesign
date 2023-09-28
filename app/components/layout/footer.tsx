"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedRoutes from "@/app/animatedRoutes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AnimatedRoutes>
      <nav className="bg-white text-black shadow-lg grid grid-cols-3 gap-4 px-20 py-8 text-center">
        <div className="flex flex-col justify-center leading-loose text-xl">
          <h3>Texas WebGems</h3>
          <p>6705 W Highway 290 Ste 607 PMB 1108</p>
          <p>Austin, TX 78735</p>
          <Link href="tel:512-765-6480">(512)765-6480</Link>
          <Link href="mailto:gem@texaswebgems.com">Email Me!</Link>
        </div>
        <div className="flex flex-col justify-center items-center text-xl">
          <Link
            href="/about"
            className="h-16 px-4 text-gray-500 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="h-16 px-4 text-gray-500 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="h-16 px-4 text-gray-500 hover:text-gray-900"
          >
            Blog
          </Link>
          <Link
            href="https://gemafawell.dev"
            className="h-16 px-4 text-gray-500 hover:text-gray-900"
          >
            Portfolio
          </Link>
        </div>
        <div className="flex flex-col justify-around">
          <h3 className="text-xl">Find us on social media wherever you are!</h3>
          <section className="grid grid-cols-2 gap-4 justify-items-center">
            <div>
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-6xl text-gray-500 hover:text-gray-900"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-6xl text-gray-500 hover:text-gray-900"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-6xl text-gray-500 hover:text-gray-900"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-6xl text-gray-500 hover:text-gray-900"
              />
            </div>
          </section>
        </div>
      </nav>
    </AnimatedRoutes>
  );
}
