import { CustomTag } from "@/components";
import { morecenters } from "@/constants";

export const metadata = {
  title: "Our Network - MBT Logistics",
};

const Network = () => {
  return (
    <section>
      <div className="network_section">
        <div className="sm:bluegradient bluegradientsm">
          <div className="container py-[130px] md:py-[160px]">
            <div className="flex lg:flex-row items-center">
              <div>
                <div>
                  <CustomTag
                    title="Locations"
                    containerStyles="lg:w-[85px] px-2 w-[85px] text-sm text-white bg-tagbg2 py-[6px]"
                  />
                </div>
                <div className="sm:w-[570px] w-[300px]">
                  <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                    Our Network
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-20">
        <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-y-20 gap-y-12 gap-x-32">
          {morecenters.map((center) => (
            <div key={center.name}>
              <div className="font-bold heading text-testibg2 text-lg">
                {center.name}
              </div>
              <div className="xl:w-[320px] w-[300px] pt-2 text-sm text-textColor">
                {center.address}
              </div>
              <div className="pt-1 text-sm text-textColor">
                Email: {center.email}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
