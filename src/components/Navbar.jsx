"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);
  const navLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    // {
    //   title: "Blogs",
    //   path: "/blogs",
    // },
    // {
    //   title: "Services",
    //   path: "/services",
    // },
    // {
    //   title: "Contacts",
    //   path: "/contacts",
    // },
    // {
    //   title: "Dashboard",
    //   path: "/dashboard",
    // },
    // {
    //   title: "Categories",
    //   path: "/categories",
    // },
  ];

  const handleLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard")) {
    return (
      <div className="text-center p-6 bg-emerald-500 text-3xl">
        Dashboard Layout
      </div>
    );
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-cyan-400 text-white">
      <Link href='/'>
        <button className="text-3xl">
          Next <span className="text-lime-600">Hero</span>
        </button>
      </Link>
      <ul className="flex items-center gap-6">
        {navLinks?.map((link) => (
          <li
            key={link.path}
            className={`${
              pathName === link.path ? "text-lime-500" : undefined
            }`}
          >
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
        <button onClick={handleLogin} className="p-3 text-lg bg-amber-500">
          Login
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
