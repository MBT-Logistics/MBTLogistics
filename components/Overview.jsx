"use client";

import Image from "next/image";
import { useState } from "react";
import { CustomButton, CustomTag } from ".";

const Overview = () => {
  const [tab, setTab] = useState("approach");

  return (
    <section className="container lg:py-24 py-16">
      <div className="flex lg:flex-row flex-col">
        <div>
          <Image
            src="/Images/truckaboutus2.jpg"
            width={630}
            height={630}
            alt="image"
          />
        </div>
        <div className="lg:pt-0 pt-16">
          <div>
            <div className="lg:pl-12 pl-0">
              <CustomTag
                title="About Us"
                containerStyles="lg:w-[90px] px-2 w-[90px] text-sm bg-tagbg"
              />
            </div>
            <div className="flex flex-col lg:pl-12 pl-0 lg:w-[600px]">
              <div className="pb-3">
                <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor">
                  Our Company Overview
                </h1>
              </div>
              <div className="flex lg:w-[614px] md:w-[800px] pb-7">
                <p className="font-medium text-textColor">
                  Our global reach, deep industry knowledge, innovative
                  technology, and extensive transportation network have allowed
                  us to bring the latest learning to bear on our customers’
                  unique challenges and desires.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-12 pl-0 flex flex-wrap gap-6 ">
            <button
              type="button"
              className={`${
                tab === "approach" &&
                "bg-[#FFB82B] text-white hover:bg-[#FFB82B]"
              } rounded-md py-4 sm:px-8 px-[88px] text-headingColor bg-[#F4F4F4] transition-all`}
              onClick={() => setTab("approach")}
            >
              <span className="text-[18px] text-center">Our Approach</span>
            </button>
            <button
              type="button"
              className={`${
                tab === "goal" && "bg-[#FFB82B] text-white hover:bg-[#FFB82B]"
              } rounded-md py-4 sm:px-[52px] px-[111px] text-headingColor bg-[#F4F4F4] transition-all`}
              onClick={() => setTab("goal")}
            >
              <span className="flex-1 text-[18px]">Our Goal</span>
            </button>
            <button
              type="button"
              className={`${
                tab === "mission" &&
                "bg-[#FFB82B] text-white hover:bg-[#FFB82B]"
              } rounded-md py-4 sm:px-10 px-[97px] text-headingColor bg-[#F4F4F4] transition-all`}
              onClick={() => setTab("mission")}
            >
              <span className="flex-1 text-[18px]">Our Mission</span>
            </button>
          </div>
          <div className="flex lg:w-[614px] md:w-[800px] py-7 lg:pl-12 pl-0">
            {tab === "approach" && (
              <p className="font-medium text-textColor">
                We leverage our scale to create innovative and tailored
                solutions that help our customers optimize their supply chains
                to stay ahead of their competition in a market that changes
                every single day.
              </p>
            )}
            {tab === "goal" && (
              <p className="font-medium text-textColor">
                Whether you've been shipping for years, or this is your first
                time crossing a new border, there are shipments to book, customs
                to clear and warehouses to manage. We're with you every step of
                the way.
              </p>
            )}
            {tab === "mission" && (
              <p className="font-medium text-textColor">
                {/* Our most advanced logistic solution yet. It incorporates all
                eServices into one portal, giving you maximum support at every
                stage of your supply chain. From tracking and scheduling to
                booking and reporting, MBT has your logistics covered. */}
                To provide the highest quality service to our customers by
                continuously increasing cost efficiency and maintaining delivery
                deadlines and encourage our workforce to continuously strive for
                quality and excellence in everything they do.
              </p>
            )}
          </div>
          <div className="lg:pl-12 pl-0 pt-3">
            <CustomButton
              title="Learn More"
              btnType="button"
              containerStyles="py-4 px-7 text-white bg-primaryColor hover:bg-hoverColor transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
