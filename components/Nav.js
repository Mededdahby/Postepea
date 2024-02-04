"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
// import {signIn , signOut , useSession , getProviders} from 'next-auth/react'

const Nav = () => {
  const [isLgged, setIsLogget] = useState(true);
  const handleLogin = () => {
    setIsLogget(true);
  };
  const handleLogout = () => {
    setIsLogget(false);
  };
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Postepea</p>
      </Link>
      {/* DiskTop navigation */}
      <div className="sm:flex hidden">
        {isLgged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/posts" className="flex gap-2 flex-center outline_btn">
              Posts
            </Link>
            <Link href="/posts/new" className="black_btn">
              Create New Posts
            </Link>
            <button
              type="button"
              className="outline_btn"
              onClick={() => handleLogin()}
            >
              signOut
            </button>
            <Link href="/" className="flex gap-2 flex-center">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="outline_btn"
              onClick={() => handleLogout}
            >
              signIn
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
