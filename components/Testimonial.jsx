"use client";

import { CustomTag } from ".";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="container pt-16 pb-11">
      <div>
        <div>
          <CustomTag
            title="Testimonials"
            containerStyles="lg:w-[115px] px-2 w-[115px] text-sm bg-tagbg"
          />
        </div>
        <div className="flex">
          <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor">
            What Our Customer Say
          </h1>
        </div>
      </div>
      <div className="mt-[30px] lg:mt-[55px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              {/* <div className="bg-testibg py-4 px-4 rounded-lg"> */}
              <div className="flex items-center gap-[13px]">
                <Image
                  src="/avatarb1.png"
                  width={40}
                  height={40}
                  alt="avatar"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Deepinder Goyal
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[300]">
                "I've been shipping with MBT Logistics for years, and they never
                cease to amaze me with their exceptional service. They are
                punctual, reliable, and their customer support is top-notch.
                Highly recommended!"
              </p>
            </div>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              {/* <div className="bg-testibg2 py-4 px-4 rounded-lg"> */}
              <div className="flex items-center gap-[13px]">
                <Image
                  src="/avatarb2.png"
                  width={40}
                  height={40}
                  alt="avatar"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                    Anshul Singh
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[300]">
                "MBT Logistics is a game-changer. Their competitive prices
                combined with their outstanding service make them my go-to
                logistics company. I've recommended them to all my colleagues,
                and they all share the same positive experience!"
              </p>
            </div>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              {/* <div className="bg-testibg py-4 px-4 rounded-lg"> */}
              <div className="flex items-center gap-[13px]">
                <Image
                  src="/avatarb3.png"
                  width={40}
                  height={40}
                  alt="avatar"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Albinder Dhindsa
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[300]">
                "When it comes to logistics, MBT Logistics is the name I trust.
                Their team is dedicated, and they go the extra mile to meet my
                shipping needs. Dependable and professional - that's MBT
                Logistics for you!"
              </p>
            </div>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              {/* <div className="bg-testibg2 py-4 px-4 rounded-lg"> */}
              <div className="flex items-center gap-[13px]">
                <Image
                  src="/avatarb1.png"
                  width={40}
                  height={40}
                  alt="avatar"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                    Ankit Gangwar
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[300]">
                "MBT Logistics has made my business operations so much smoother.
                Their efficiency in handling shipments is impressive. They truly
                understand the importance of timely deliveries. I'm a satisfied
                customer!"
              </p>
            </div>
            {/* </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
