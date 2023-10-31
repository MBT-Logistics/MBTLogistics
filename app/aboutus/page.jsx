import {
  CustomTag,
  Faq,
  MoreServices,
  Overview,
  Testimonial,
  Centers,
} from "@/components";
import Image from "next/image";

export const metadata = {
  title: "About Us - MBT Logistics",
};

const AboutUs = () => {
  return (
    <section>
      <div className="aboutus_section">
        <div className="sm:bluegradient bluegradientsm">
          <div className="container py-[130px] md:py-[160px]">
            <div className="flex lg:flex-row items-center">
              <div>
                <div>
                  <CustomTag
                    title="Services"
                    containerStyles="lg:w-[85px] px-2 w-[85px] text-sm text-white bg-tagbg2 py-[6px]"
                  />
                </div>
                <div className="sm:w-[570px] w-[300px]">
                  <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                    About Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Overview />
      <MoreServices />
      <div className="container py-24">
        <div className="pb-[65px]">
          <div className="flex justify-center">
            <CustomTag
              title="Locations"
              containerStyles="lg:w-[85px] px-2 w-[85px] text-sm bg-tagbg"
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-[28px] text-center font-semibold heading md:text-[35px] text-headingColor md:w-[350px]">
              Our Network
            </h1>
          </div>
        </div>
        <div className="flex justify-between pt-3 xl:flex-row flex-col">
          <div>
            <Centers />
          </div>
          <div className="items-center">
            <Image src="/Images/Map.png" width={620} height={620} alt="map" />
          </div>
        </div>
      </div>
      <div className="bg-light-white">
        <Testimonial />
      </div>
      <div className="xl:pb-0 pb-36">
        <Faq />
      </div>
    </section>
  );
};

export default AboutUs;
