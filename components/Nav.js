"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [isLgged, setIsLogget] = useState(true);
  const { data: session } = useSession();

  const [taggel, setTaggel] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProvidersFunc = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setProvidersFunc();
  }, []);

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
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/posts/new" className="black_btn">
              Create New Posts
            </Link>
            <button
              type="button"
              className="outline_btn"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link href="/" className="flex gap-2 flex-center">
              <Image
                src={session?.user.image}
                alt="logo"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  className="outline_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* Phone navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Image
              src={session?.user.image}
              alt="logo"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setTaggel(!taggel)}
            />

            {taggel && (
              <div className="dropdown">
                <Link href="/posts/new" className="black_btn">
                  New Posts
                </Link>
                <button
                  type="button"
                  className="outline_btn"
                  onClick={() => {
                    setTaggel(!taggel);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  className="outline_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
