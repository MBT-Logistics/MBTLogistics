import Image from "next/image";
import React from "react";
import { CustomTag } from ".";
import Link from "next/link";

const MainServices = () => {
  return (
    <section className="container py-24">
      <div className="pb-16">
        <div className="flex justify-center">
          <CustomTag
            title="What We Offer"
            containerStyles="lg:w-[117px] px-2 w-[117px] text-sm bg-tagbg"
          />
        </div>
        <div className="flex justify-center">
          <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor text-center">
            Our Services
          </h1>
        </div>
      </div>
      <div className="flex justify-between xl:flex-row flex-col">
        <div className="flex lg:flex-row flex-col lg:items-center xl:pb-0 lg:pb-24 pb-20">
          <div className="items-center lg:pr-10 lg:pb-0 pb-6">
            <Image
              src="/Icons/truckIcon.svg"
              width={70}
              height={70}
              alt="icon"
            />
          </div>
          <div className="lg:border-l lg:border-nav-border lg:pl-8">
            <div className="pb-12">
              <Link href="/servicedetails?service=domesticshippingdetails">
                <h4 className="heading text-headingColor font-medium text-[25px] pb-4 hover:text-yellowColor">
                  Full Truck Load (FTL)
                </h4>
              </Link>
              <p className="xl:w-[450px] sm:w-[450px] md:w-[800px] w-[290px]">
                Our logistics company specializes in FTL services, ensuring your
                cargo receives dedicated, full-capacity transport for maximum
                efficiency and security.
              </p>
            </div>
            <div>
              <Link href="/servicedetails?service=domesticshippingdetails">
                <h4 className="heading text-headingColor font-medium text-[25px] pb-4 hover:text-yellowColor">
                  Part Truck Load (LTL)
                </h4>
              </Link>
              <p className="xl:w-[450px] sm:w-[450px] md:w-[800px] w-[290px]">
                We offer LTL solutions, perfect for smaller shipments, allowing
                you to share the cost with other customers while maintaining
                reliable delivery times.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center">
          <div className="items-center lg:pb-0 pb-8 xl:pr-10 lg:pr-[58px]">
            <Image
              src="/Icons/dooricon.svg"
              width={50}
              height={50}
              alt="icon"
            />
          </div>
          <div className="lg:border-l lg:border-nav-border lg:pl-8">
            <div className="pb-12">
              <Link href="/servicedetails?service=deliverydetails">
                <h4 className="heading text-headingColor font-medium text-[25px] pb-4 hover:text-yellowColor">
                  Door to Door Delivery
                </h4>
              </Link>
              <p className="xl:w-[450px] sm:w-[450px] md:w-[800px] w-[290px]">
                Our door-to-door delivery service brings convenience and peace
                of mind, ensuring your goods reach their destination without the
                hassle of transfers or pickups.
              </p>
            </div>
            <div>
              <Link href="/servicedetails?service=deliverydetails">
                <h4 className="heading text-headingColor font-medium text-[25px] pb-4 hover:text-yellowColor">
                  Cash on Delivery
                </h4>
              </Link>
              <p className="xl:w-[450px] sm:w-[450px] md:w-[800px] w-[290px]">
                With our COD option, you can trust us to handle payments
                securely, offering added convenience for your customers and
                ensuring a smooth transaction process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
