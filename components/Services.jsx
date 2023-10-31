import React from "react";
import { CustomTag, ServiceCard } from ".";
import { Service } from "@/constants";

const Services = () => {
  return (
    <section id="services" className="py-[60px] md:py-[95px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row sm:gap-[90px] gap-[45px]">
          <div className="mr-5">
            <div>
              <CustomTag
                title="What We Do"
                containerStyles="lg:w-[105px] px-2 w-[105px] text-sm bg-tagbg"
              />
            </div>
            <div className="flex sm:w-[288px] w-[300px]">
              <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor">
                Safe & Reliable Cargo Solutions
              </h1>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-14 sm:gap-y-24 gap-y-12">
            {Service.map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
