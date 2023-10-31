"use client";

import { CustomButton, CustomTag } from "@/components";

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("services");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero_section pt-[70px] md:pt-[120px]">
      <div className="sm:container px-5">
        <div className="flex lg:flex-row items-center">
          <div>
            <div className="lg:w-[570px]">
              <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                Safest Logistics Solutions Provider With Integrity
              </h1>
              <p className="py-8 text-light-white-100 font-medium">
                We're a leading provider of less-than-truckload freight
                transportation with the world-class network, technology and
                service our customers need at all times.
              </p>
              <CustomButton
                title="Explore More"
                type="button"
                containerStyles="py-4 px-7 text-white bg-primaryColor hover:bg-hoverColor transition-all"
                handleClick={handleScroll}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
