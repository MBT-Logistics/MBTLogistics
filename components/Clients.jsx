import { HomeClients } from "@/constants";
import { CustomButton, CustomTag } from ".";
import Image from "next/image";
import Link from "next/link";

const Clients = () => {
  return (
    <section className="bg-light-white container py-16">
      <div>
        <div className="pb-16">
          <div className="flex justify-center">
            <CustomTag
              title="Clients"
              containerStyles="lg:w-[75px] px-2 w-[75px] text-sm bg-tagbg"
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-[28px] font-semibold heading md:text-[35px] text-headingColor text-center">
              Our Esteemed Clients
            </h1>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center">
          {HomeClients.map((homeclient) => (
            <div className="md:pb-0 pb-10" key={homeclient.title}>
              <Image
                src={homeclient.icon}
                width={220}
                height={220}
                alt="clients"
              />
            </div>
          ))}
        </div>
        <div className="sm:pt-[90px] pt-[50px] flex justify-center">
          <div>
            <Link href="/clients">
              <CustomButton
                title="More Clients"
                type="button"
                containerStyles="py-4 px-7 text-white bg-primaryColor hover:bg-hoverColor transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
