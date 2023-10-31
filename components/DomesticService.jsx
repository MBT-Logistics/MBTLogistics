import Image from "next/image";

const DomesticService = () => {
  return (
    <section className="sm:container px-6 pb-9">
      <div className="sm:py-20 py-16 flex justify-center">
        <Image
          src="/Images/truckservices.jpg"
          width={1300}
          height={1200}
          alt="truck"
        />
      </div>
      <div className="flex gap-10 -mt-6 items-center">
        <Image src="/Icons/truckIcon.svg" width={60} height={60} alt="icon" />
        <h4 className="heading text-headingColor font-semibold sm:text-[35px] text-[24px] -ml-4">
          Shipping Services
        </h4>
      </div>
      <div className="pt-7">
        <p className="font-medium text-textColor">
          At MBT Logistics, we take pride in offering reliable and efficient
          domestic shipping services to meet all your transportation needs
          within the country. Whether you have a full truckload of goods or
          smaller shipments, we've got you covered.
        </p>
        <div className="py-6">
          <h4 className="heading text-headingColor font-normal text-[25px]">
            Full Truck Load (FTL):
          </h4>
          <p className="font-medium text-textColor py-5">
            When You Need It All <br /> Our FTL service is designed for
            businesses and individuals with substantial cargo to transport. With
            FTL, your shipment occupies the entire truck, providing several key
            benefits:
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Efficiency:</span> FTL
            ensures your goods are the sole focus of the journey, resulting in
            faster transit times.
          </p>
          <p className="font-medium text-textColor py-4">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Security:</span> Your
            cargo is loaded and sealed at the origin, reducing the risk of
            tampering or damage during transit.
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Flexibility:</span> You
            have the option to schedule deliveries at your convenience, allowing
            for precise planning.
          </p>
        </div>
        <div className="py-6">
          <h4 className="heading text-headingColor font-normal text-[25px]">
            Part Truck Load (LTL):
          </h4>
          <p className="font-medium text-textColor py-5">
            Sharing Costs, Not Compromising Quality <br /> For shipments that
            don't require a full truck, our LTL service is the perfect solution.
            Here's why you should consider it:
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Cost-Effective:</span>{" "}
            LTL allows multiple customers to share the same truck, reducing
            shipping costs for everyone.
          </p>
          <p className="font-medium text-textColor py-4">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Timely Deliveries:</span>{" "}
            Despite sharing space, we maintain reliable delivery schedules to
            ensure your cargo arrives on time.
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">
              Environmentally Friendly:
            </span>{" "}
            LTL helps reduce carbon emissions by optimizing truck capacity
            utilization.
          </p>
        </div>
        <div className="py-6">
          <h4 className="heading text-headingColor font-medium text-[30px]">
            Key Features of Our Domestic Shipping Services:
          </h4>
          <p className="font-medium text-textColor pt-6">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">
              Nationwide Coverage:
            </span>{" "}
            We have an extensive network that covers every corner of the
            country, ensuring your cargo reaches its destination, no matter how
            remote.
          </p>
          <p className="font-medium text-textColor pt-4">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">
              Experienced Drivers:
            </span>{" "}
            Our professional drivers are well-trained and experienced,
            guaranteeing the safe and timely transport of your goods.
          </p>
          <p className="font-medium text-textColor pt-4">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Advanced Tracking:</span>{" "}
            We provide real-time tracking capabilities, allowing you to monitor
            your shipments throughout their journey.
          </p>
          <p className="font-medium text-textColor pt-4">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Customer Support:</span>{" "}
            Our dedicated customer support team is available to assist you with
            any inquiries or concerns you may have.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomesticService;
