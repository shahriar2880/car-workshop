import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/serivces"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-3 shadow"
          >
            {
                navItems.map((item) => (
                    <Link href={item.path} key={item.path}>{item.title}</Link>

                ))
            }
          </div>
        </div>
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.png"
            width={80}
            height={60}
            alt="logo of author"
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center justify-evenly gap-x-12">
        {
                navItems.map((item) => (
                    <Link href={item.path} key={item.path}>{item.title}</Link>

                ))
            }
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-3 items-center">
        <IoCartOutline className="text-xl" />
        <IoSearch className="text-xl"/>
        <a className="btn btn-outline btn-primary px-8">Appoinment</a>
        <a href={'/login'} className="btn btn-outline btn-primary px-8">LogIn</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
