"use client";

import { useState } from "react";
import config from "../config/config";
import Image from "next/image";
import CallToAction from "../elements/CallToAction";

export default function Nav() {
  const Links = [
    { name: "Home", url: "/" },
    { name: "Properties", url: "/properties" },
    { name: "Our projects", url: "/projects" },
    { name: "Market", url: "/market" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="container mx-auto px-5">
      <header className="flex items-center justify-between gap-5 border-b-1 border-b-white/[0.4] py-5">
        {/* Desktop Menu */}
        <nav className="hidden md:flex md:flex-row md:gap-5 md:bg-transparent md:text-white">
          {Links.map((item, index) => (
            <a key={index} href={item.url}>
              {item.name}
            </a>
          ))}
        </nav>

        <a href="">
          <Image src={config.logo} alt="" width={150} />
        </a>

        <CallToAction />

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex flex-col gap-1"
          >
            <span className="sr-only">Open main menu</span>
            <span className="h-0.5 w-5 bg-white"></span>
            <span className="h-0.5 w-5 bg-white"></span>
            <span className="h-0.5 w-5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="absolute left-0 top-0 z-10 flex h-screen w-screen flex-col justify-center gap-5 bg-white text-center text-black">
            {Links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-6"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </nav>
        )}
      </header>
    </div>
  );
}
