import React from "react";
import { CustomButton, CustomTag } from ".";
import { faqs } from "@/constants";
import FaqCard from "./FaqCard";
import Image from "next/image";
import Link from "next/link";

const Faq = ({ containerStyles }) => {
  return (
    <section className={`pt-28 pb-10 ${containerStyles}`}>
      <div className="flex justify-between xl:flex-row flex-col container">
        <div>
          <div>
            <div>
              <div>
                <CustomTag
                  title="FAQ"
                  containerStyles="lg:w-[50px] px-2 w-[50px] text-sm bg-tagbg"
                />
              </div>
              <div className="flex sm:w-[300px] w-[300px]">
                <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor">
                  Frequently Asked Questions
                </h1>
              </div>
            </div>
          </div>
          <div className="pt-[65px]">
            {faqs.map((faq) => (
              <FaqCard faq={faq} key={faq.question} />
            ))}
          </div>
        </div>
        <div className="py-20">
          <div>
            <Image
              src="/Images/deliveryboy.jpg"
              width={500}
              height={500}
              alt="image"
            />
          </div>
          <div className="-my-[150px] xl:-ml-20 -ml-8">
            <Link href="/contact">
              <CustomButton
                title="Have Any Questions?"
                btnType="button"
                containerStyles="sm:py-3 sm:px-5 py-2 px-4 text-white bg-primaryColor hover:bg-hoverColor transition-all"
                textStyles="sm:text-[16px] text-[14px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
