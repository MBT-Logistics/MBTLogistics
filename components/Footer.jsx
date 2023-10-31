import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
import { CustomButton } from ".";

const Footer = () => {
  // const year = new Date().getFullYear();

  return (
    <footer className="container flex flex-col text-black-100 mt-5 border-t border-nav-border bg-light-white">
      <div className="container flex lg:flex-row flex-col pt-10 md:pt-14 pb-12 border-b border-nav-border justify-between gap-8">
        <div className="flex items-center justify-center">
          <p className="font-bold heading lg:w-[570px] text-[25px] md:text-[38px] sm:text-left text-center">
            Make sure you choose the right expedition services for your delivery
          </p>
        </div>
        <div className="items-center justify-center sm:flex hidden">
          <Link href="/contact">
            <CustomButton
              title="Contact Us"
              type="button"
              containerStyles="py-3 px-5 text-white bg-primaryColor hover:bg-hoverColor transition-all"
            />
          </Link>
        </div>
      </div>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/">
            <Image
              src="/Images/logo.svg"
              alt="MBT Logistics"
              width={159}
              height={50}
              className="object-contain"
            />
          </Link>
          <p className="text-start text-base font-normal max-w-xs">
            We offer goods transportation services across 28 States and 6 Union
            Territories covering all major cities and towns in India.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold text-base">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray text-base"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm flex-wrap mt-10 border-t border-nav-border sm:px-16 px-6 py-10">
        <p>MBT Logistics. All rights reserved &copy;</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 text-sm">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500 text-sm">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
