"use client";

import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flexBetween navbar sm:container px-4">
      <div className="flexStart gap-10">
        <Link href="/" onClick={() => setActive("")}>
          <Image
            src="/Images/logo.svg"
            width={200}
            height={50}
            alt="MBT Logistics"
          />
        </Link>
      </div>
      <div className="flexStart">
        <ul className="lg:flex hidden text-small gap-9">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`${
                active === link.text
                  ? "text-hoverColor font-medium text-[17px]"
                  : "text-black"
              } hover:text-hoverColor cursor-pointer`}
              onClick={() => setActive(link.text)}
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="flexCenter sm:flex hidden">
        {session?.user ? (
          <div className="lg:flex hidden gap-4 md:gap-5">
            <button
              type="button"
              onClick={signOut}
              className="rounded-lg border border-primaryColor bg-transparent py-1.5 px-5 text-black transition-all hover:bg-primaryColor hover:text-white text-center text-small font-inter flex items-center justify-center"
            >
              Sign Out
            </button>
            <Link href="">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="bg-primaryColor lg:flex hidden py-2 px-6 text-white font-[500] h-[44px] flex items-center justify-center rounded-lg text-[16px] transition-all hover:bg-white hover:text-black border border-primaryColor"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? "/Icons/close.svg" : "/Icons/menu.svg"}
          width={100}
          height={100}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-nav-border absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`${
                  active === link.text
                    ? "text-hoverColor font-medium text-[17px]"
                    : "text-black"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.text);
                }}
              >
                {link.text}
              </Link>
            ))}

            {session?.user ? (
              <div className="flex">
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="bg-primaryColor py-1 px-6 text-white font-[500] h-[44px] flex items-center justify-center rounded-lg text-small transition-all hover:bg-white hover:text-black border border-primaryColor"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="bg-primaryColor py-1 px-6 text-white font-[500] h-[44px] flex items-center justify-center rounded-lg text-small transition-all hover:bg-white hover:text-black border border-primaryColor"
                    >
                      Sign in
                    </button>
                  ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
