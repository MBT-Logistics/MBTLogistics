import { CustomTag, Numbers } from "@/components";
import { Client } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: "Our Clients - MBT Logistics",
};

const Clients = () => {
  return (
    <section>
      <div className="clients_section">
        <div className="sm:bluegradient bluegradientsm">
          <div className="container py-[130px] md:py-[160px]">
            <div className="flex lg:flex-row items-center">
              <div>
                <div>
                  <CustomTag
                    title="Clients"
                    containerStyles="lg:w-[70px] px-2 w-[70px] text-sm text-white bg-tagbg2 py-[6px]"
                  />
                </div>
                <div className="sm:w-[570px] w-[434px]">
                  <h1 className="heading text-[42px] leading-[46px] text-white font-semibold md:text-[60px] md:leading-[70px]">
                    Our Esteemed Clients
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:gap-28 gap-10 items-center pb-16 container pt-24">
        {Client.map((client) => (
          <div className="md:pb-0 pb-10 flex justify-center" key={client.title}>
            <Image src={client.icon} width={220} height={220} alt="clients" />
          </div>
        ))}
      </div>
      <div>
        <Numbers />
      </div>
    </section>
  );
};

export default Clients;
