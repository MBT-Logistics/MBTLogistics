"use client";

import Image from "next/image";
import { useState } from "react";

const FaqCard = ({ faq }) => {
  const [isopen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isopen);
  };

  return (
    <div className="pb-6 rounded-[12px] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="xl:w-[532px] sm:w-[600px] w-[290px] text-[17px] leading-7 sm:text-[20px] lg:leading-8 text-headingColor">
          {faq.question}
        </h4>
        <div
          className={`${isopen} w-7 h-7 lg:w-8 lg:h-8 rounded flex items-center justify-center`}
        >
          {isopen ? (
            <Image src="/Images/close.png" width={30} height={30} alt="arrow" />
          ) : (
            <Image src="/Images/open.png" width={30} height={30} alt="arrow" />
          )}
        </div>
      </div>

      {isopen && (
        <div className="mt-4 sm:w-[560px] w-[260px]">
          <p className="leading-6 text-[16px} lg:leading-7 font-medium text-textColor">
            {faq.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
