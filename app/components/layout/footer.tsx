"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedRoutes from "@/app/animatedRoutes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AnimatedRoutes>
      <nav className="bg-transparent text-white shadow-lg lg:grid lg:grid-cols-3 lg:gap-4 px-20 py-8 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center text-center">
        <div className="flex flex-col justify-center leading-loose text-xl sm:mb-8">
          <h3>Tri-State WebGems, LLC</h3>
          <p>5000 Thayer Ctr Ste C</p>
          <p>Oakland, MD 21550</p>
          <Link href="mailto:contact@tristatewebgems.com">contact@tristatewebgems.com</Link>
          <Link href="tel:+12406852490">(240) 685-2490</Link>
        </div>
        <div className="flex flex-col justify-center items-center text-xl sm:flex-row sm:justify-around">
          <Link
            href="/about"
            className="h-16 px-4 text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="h-16 px-4 text-white"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="h-16 px-4 text-white"
          >
            Blog
          </Link>
          <Link
            href="https://gemafawell.contra.com"
            className="h-16 px-4 text-white"
          >
            Portfolio
          </Link>
        </div>
        <div className="flex flex-col justify-around">
          <h3 className="text-xl">Find me on social media wherever you are!</h3>
          <section className="mx-auto my-8 flex flex-row gap-8 justify-items-center">
            <div>
              <Link href="https://instagram.com/GemAfaWell" target="_blank" title="Instagram - GemAfaWell, Founder of Tri-State WebGems">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-4xl text-white"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/tristatewebgems" target="_blank" title="LinkedIn - Tri-State WebGems, LLC">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl text-white"
                />
              </Link>
            </div>
          </section>
        </div>
      </nav>
    </AnimatedRoutes>
  );
}
