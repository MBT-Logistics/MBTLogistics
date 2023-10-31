import { CustomTag, Features, MainServices, Numbers, Testimonial } from "@/components";

export const metadata = {
  title: "Services - MBT Logistics",
};

const Services = () => {
  return (
    <section>
      <div className="service_section">
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
                <div className="sm:w-[570px] w-[434px]">
                  <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                    Our Logistics Service
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainServices />
      <Features />
      <div>
        <Testimonial />
      </div>
      <div className="sm:pt-8 pt-3">
        <Numbers />
      </div>
    </section>
  );
};

export default Services;
