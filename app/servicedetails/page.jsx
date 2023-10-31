"use client";

import { CustomTag, DomesticService, DoorService } from "@/components";
import { useSearchParams } from "next/navigation";

const ServiceDetail = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  return (
    <section>
      <div className="clients_section">
        <div className="sm:bluegradient bluegradientsm">
          <div className="sm:container px-6 py-[130px] md:py-[160px]">
            <div className="flex lg:flex-row items-center">
              <div>
                <div>
                  <CustomTag
                    title="Service"
                    containerStyles="lg:w-[70px] px-2 w-[70px] text-sm text-white bg-tagbg2 py-[6px]"
                  />
                </div>
                <div className="sm:w-[570px] w-[434px]">
                  <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                    Service Details
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {service === "domesticshippingdetails" ? (
        <DomesticService />
      ) : (
        <DoorService />
      )}
    </section>
  );
};

export default ServiceDetail;
