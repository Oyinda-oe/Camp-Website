"use client";
import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  // State to track if menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          alt="This is an Image"
          src="/hilink-logo.svg"
          width={74}
          height={29}
        />
      </Link>
      <ul className="lg:flex hidden h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-18 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src={isMenuOpen ? "/icon-close.svg" : "/menu.svg"}
        alt={isMenuOpen ? "Close menu" : "Open menu"}
        width={30}
        height={30}
        className={`inline-block cursor-pointer lg:hidden z-50 ${
          isMenuOpen ? "fixed top-6 right-6" : ""
        }`}
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-2/3 bg-white shadow-md z-40 transition-transform duration-300 lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-10 h-full">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                onClick={toggleMenu}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
            <div className="lg:flexCenter">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
