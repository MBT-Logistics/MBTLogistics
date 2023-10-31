import Image from "next/image";

const Transporting = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="flex justify-center">
          <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor text-center">
            Transporting Across India
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-between py-16 overflow-hidden">
          <div className="lg:pb-0 pb-8">
            <Image
              src="/Images/card1.PNG"
              width={390}
              height={50}
              alt="image"
            />
          </div>
          <div className="lg:pb-0 pb-8">
            <Image
              src="/Images/card2.PNG"
              width={390}
              height={50}
              alt="image"
            />
          </div>
          <div className="lg:pb-0 pb-8">
            <Image
              src="/Images/card3.PNG"
              width={390}
              height={50}
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="bg-tbg py-36 -mt-64" />
    </section>
  );
};

export default Transporting;
