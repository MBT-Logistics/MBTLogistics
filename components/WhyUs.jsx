import React from "react";
import { CustomTag, FeatureCard } from ".";
import Image from "next/image";
import { Features } from "@/constants";

const WhyUs = () => {
  return (
    <section>
      <div className="whyus_section"></div>
      <div className="sm:container px-4">
        <div className="bg-white -mt-32 overflow-hidden">
          <div className="sm:py-24 sm:px-24 py-6 px-6">
            <div className="flex justify-between xl:flex-row flex-col">
              <div>
                <div>
                  <CustomTag
                    title="Why Us"
                    containerStyles="lg:w-[80px] px-2 w-[80px] text-sm bg-tagbg"
                  />
                </div>
                <div className="flex flex-col md:w-[501px] sm:w-[270px] pb-7">
                  <div className="pb-2">
                    <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor">
                      We Provide Full Range Global Logistics Solution
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-textColor">
                      We strive to understand what the customer is going
                      through, what they need, what their price points are, and
                      what’s important to them and their customers.
                    </p>
                    <p className="font-normal text-textColor py-2">
                      We historically build meaningful relationships with our
                      customers. We connect with our customers. We care.
                    </p>
                  </div>
                </div>
                <div>
                  {Features.map((feature) => (
                    <div key={feature.title}>
                      <FeatureCard
                        feature={feature}
                        containerStyles="sm:flex sm:flex-row items-center pb-6"
                        textsize="sm:text-[25px] text-[20px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex sm:pt-0 pt-5">
                <Image
                  src="/Images/vanbox.jpg"
                  width={500}
                  height={500}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
