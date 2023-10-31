import { CustomTag, Faq, Track } from "@/components";

export const metadata = {
  title: "Track Your Order - MBT Logistics",
};

const Tracking = () => {
  return (
    <section>
      <div className="track_section">
        <div className="sm:bluegradient bluegradientsm">
          <div className="container py-[130px] md:py-[160px]">
            <div className="flex lg:flex-row items-center">
              <div>
                <div>
                  <CustomTag
                    title="Track"
                    containerStyles="lg:w-[60px] px-2 w-[60px] text-sm text-white bg-tagbg2 py-[6px]"
                  />
                </div>
                <div className="sm:w-[570px] w-[434px]">
                  <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                    Track Your Consignment
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Track />
      <div className="xl:pb-0 pb-36">
        <Faq containerStyles="bg-light-white" />
      </div>
    </section>
  );
};

export default Tracking;
