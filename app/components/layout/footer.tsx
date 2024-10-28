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
      <nav className="bg-black text-white shadow-lg lg:grid lg:grid-cols-3 lg:gap-4 px-20 py-8 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center text-center">
        <div className="flex flex-col justify-center leading-loose text-xl sm:mb-8">
          <h3>Texas WebGems</h3>
          <p>Austin, TX 78753</p>
          <Link href="mailto:gemini@gemafawell.dev">Email Me!</Link>
        </div>
        <div className="flex flex-col justify-center items-center text-xl sm:flex-row sm:justify-around">
          <Link
            href="/about"
            className="h-16 px-4 text-gray-400 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="h-16 px-4 text-gray-400 hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="h-16 px-4 text-gray-400 hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="https://gemafawell.dev"
            className="h-16 px-4 text-gray-400 hover:text-white"
          >
            Portfolio (under construction)
          </Link>
        </div>
        <div className="flex flex-col justify-around">
          <h3 className="text-xl pb-4">Find us on social media wherever you are!</h3>
          <p className='pb-4'>Ask about us on:</p>
          <section className="grid grid-cols-2 gap-4 justify-items-center">
            <div>
              <Link href="https://www.facebook.com/TexasWebGems" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-6xl text-gray-400 hover:text-white"
              />
              </Link>
            </div>
            <div>
              <Link href="https://www.x.com/TexasWebGems" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-6xl text-gray-400 hover:text-white"
              />
              </Link>
            </div>
            <div>
              <Link href="https://instagram.com/GemAfaWell" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-6xl text-gray-400 hover:text-white"
              />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/texas-webgems" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-6xl text-gray-400 hover:text-white"
                />
              </Link>
            </div>
          </section>
        </div>
      </nav>
    </AnimatedRoutes>
  );
}
