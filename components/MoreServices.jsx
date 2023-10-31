import { CustomButton, CustomTag, MoreServiceCard } from ".";
import { MoreService } from "@/constants";

const MoreServices = () => {
  return (
    <section className="py-[60px] md:py-[75px] bg-light-white overflow-hidden">
      <div className="container">
        <div className="pb-[65px]">
          <div className="flex justify-center">
            <CustomTag
              title="What We Do"
              containerStyles="lg:w-[105px] px-2 w-[105px] text-sm bg-tagbg"
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-[28px] text-center font-semibold heading md:text-[35px] text-headingColor md:w-[382px]">
              Our Logistics Services
            </h1>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[150px] sm:gap-y-24 gap-y-12">
            {MoreService.map((service) => (
              <div key={service.id}>
                <MoreServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <CustomButton
            title="More Work"
            type="button"
            containerStyles="py-5 px-10 text-white bg-primaryColor hover:bg-hoverColor transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreServices;
