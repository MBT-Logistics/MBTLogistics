import Image from "next/image";

const DoorService = () => {
  return (
    <section className="sm:container px-6 pb-9">
      <div className="sm:py-20 py-16 flex justify-center">
        <Image
          src="/Images/doorservices.jpg"
          width={1300}
          height={1200}
          alt="delivery"
        />
      </div>
      <div className="flex gap-10 -mt-6 items-center">
        <Image src="/Icons/dooricon.svg" width={40} height={40} alt="icon" />
        <h4 className="heading text-headingColor font-semibold sm:text-[35px] text-[26px] -ml-4">
          Delivery Services
        </h4>
      </div>
      <div className="pt-7">
        <p className="font-medium text-textColor">
          At MBT Logistics, we understand the importance of a seamless and
          reliable delivery service for both businesses and consumers. That's
          why we offer a range of delivery options designed to cater to your
          unique needs. Our services are underpinned by our commitment to
          excellence and customer satisfaction.
        </p>
        <div className="py-6">
          <h4 className="heading text-headingColor font-normal text-[25px]">
            Door-to-Door Delivery:
          </h4>
          <p className="font-medium text-textColor py-5">
            Our Door-to-Door delivery service is designed to make your life
            easier. We take care of the entire delivery process, from picking up
            your shipment to ensuring it safely reaches its destination right at
            your doorstep. No more waiting at depots or coordinating pick-ups.
            We handle it all, so you can focus on what matters most to you.
            <br />
            <br />
            With our Door-to-Door service, you can expect:
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Convenience:</span> Say
            goodbye to the hassle of pickups and drop-offs. We bring your
            shipment directly to your location.
          </p>
          <p className="font-medium text-textColor py-4">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Reliability:</span> Our
            experienced team ensures that your package arrives on time and in
            excellent condition.
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Peace of Mind:</span>{" "}
            Track your delivery in real-time, so you're always in the know about
            the status of your shipment.
          </p>
        </div>
        <div className="py-6">
          <h4 className="heading text-headingColor font-normal text-[25px]">
            Cash On Delivery (COD):
          </h4>
          <p className="font-medium text-textColor py-5">
            For businesses looking to offer a flexible payment option to their
            customers, our Cash On Delivery (COD) service is the ideal choice.
            This service allows your customers to pay for their orders upon
            delivery, providing a convenient and trustworthy payment method.
            <br />
            <br />
            Benefits of our COD service:
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Customer Trust:</span>{" "}
            Offering COD builds trust with your customers, as they only pay when
            they receive their goods.
          </p>
          <p className="font-medium text-textColor py-4">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">Increased Sales:</span>{" "}
            Studies have shown that COD options can boost sales, especially for
            e-commerce businesses.
          </p>
          <p className="font-medium text-textColor">
            <span className="font-extrabold items-center text-black text-[25px] pr-4">
              &#8594;
            </span>
            <span className="font-bold text-black-100">
              Reduced Payment Risk:
            </span>{" "}
            We handle the collection of payments, reducing the risk associated
            with online transactions.
          </p>
        </div>
        <div className="py-6">
          <p className="font-medium text-textColor pt-6">
            With MBT Logistics, you can rest assured that your COD transactions
            will be handled securely and professionally.
          </p>
          <p className="font-medium text-textColor pt-4">
            Whether you need a reliable Door-to-Door delivery service or wish to
            implement Cash On Delivery for your business, we've got you covered.
            At MBT Logistics, we're committed to providing top-notch delivery
            solutions that meet your needs. Our team is dedicated to making your
            shipping and payment processes as smooth as possible.
          </p>
          <p className="font-medium text-textColor pt-4">
            Ready to experience our exceptional services? Contact us today to
            discuss your specific requirements, and let us handle the logistics
            while you focus on growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoorService;
