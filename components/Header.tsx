"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-white shadow-lg py-2" : "bg-none py-4"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="max-container padding-container flexBetween">
        {/* logo */}
        <Link href={"/"} className="flexCenter">
          <Image
            src={"/logo.png"}
            alt="logoImg"
            height={111}
            width={111}
            priority
            className="h-auto w-28"
          />
        </Link>
        {/* nav links */}
        <Nav
          containerStyles={`${
            menuOpened
              ? "flexCenter flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-0 w-full"
              : "hidden lg:flex gap-14 transition-all duration-500"
          }`}
          linkStyles={
            menuOpened
              ? "capitalize cursor-pointer my-4 text-gray-50 relative transition-all"
              : "capitalize cursor-pointer text-gray-30 relative transition-all"
          }
        />
        {/* icon & button */}
        <div className="flexCenter">
          <Button
            variant={"ghost"}
            className={cn("text-[17px] p-6 flex gap-2")}
          >
            <Image src={"/user.svg"} alt="uerIcon" height={22} width={22} />
            Sign in
          </Button>
          {!menuOpened ? (
            <CgMenuRight
              className="lg:hidden inline-block cursor-pointer regular-24 hover:text-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <CgClose
              className="lg:hidden inline-block cursor-pointer regular-24 hover:text-secondary"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
