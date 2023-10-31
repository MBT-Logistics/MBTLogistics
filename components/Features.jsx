import Image from "next/image";
import { CustomTag } from ".";
import { Feature } from "@/constants";

const Features = () => {
  return (
    <section className="container py-16 bg-light-white-300">
      <div>
        <div className="pb-16">
          <div className="flex justify-center">
            <CustomTag
              title="The Features"
              containerStyles="lg:w-[113px] px-2 w-[113px] text-sm bg-tagbg"
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor text-center">
              Why Choose Us?
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between lg:flex-row flex-col">
          <div className="items-center lg:-mt-14 -mt-4">
            <Image
              src="/Images/manholdingbox.jpg"
              width={650}
              height={650}
              alt="image"
            />
          </div>
          <div className="md:pl-11 lg:pt-0 pt-14 sm:w-[610px] w-[300px]">
            {Feature.map((item) => (
              <div key={item.title} className="flex sm:pb-20 pb-8">
                <Image src={item.icon} width={50} height={50} alt="icon" />
                <div className="pl-8 xs:pt-0 pt-6">
                  <h3 className="heading text-[25px] font-semibold text-headingColor pb-2">
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
