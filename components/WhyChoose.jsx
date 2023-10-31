import Image from "next/image";
import { CustomTag, FeatureCard } from ".";
import { MoreFeatures } from "@/constants";

const WhyChoose = () => {
  return (
    <section className="py-16">
      <div className="flex lg:flex-row flex-col">
        <div className="bg-testibg2">
          <div className="sm:py-32 pt-16 pb-12 px-10">
            <Image
              src="/Images/plane.jpg"
              width={700}
              height={500}
              alt="planeimage"
            />
          </div>
        </div>
        <div className="whychoose_section">
          <div className="pt-16 sm:pl-10 pl-10">
            <CustomTag
              title="Why Choose"
              containerStyles="lg:w-[120px] px-2 w-[120px] text-sm bg-tagbg"
            />
          </div>
          <div className="flex flex-col sm:pl-10 pl-10 lg:w-[600px] md:[1000px]">
            <div className="pb-3">
              <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor">
                We Create An Opportunity To Reach Business Potential
              </h1>
            </div>
            <div className="flex lg:w-[500px] md:w-[800px] pb-10">
              <p className="font-medium text-textColor">
                MBT Logistics is a distinguished supply chain management firm
                which provides comprehensive solutions for warehousing,
                transportation and a host of logistics services.
              </p>
            </div>
          </div>
          <div className="sm:pl-10 pl-10 grid lg:grid-cols-2 md:grid-cols-4 gap-5">
            {MoreFeatures.map((feature) => (
              <div key={feature.title}>
                <FeatureCard
                  feature={feature}
                  containerStyles="flex flex-row items-center sm:pb-6 pb-0"
                  textsize="sm:text-[20px] text-[18px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
