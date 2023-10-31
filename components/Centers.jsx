import { centers } from "@/constants";
import { CustomButton } from ".";
import Link from "next/link";

const Centers = () => {
  return (
    <section>
      <div className="grid xl:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-12 gap-x-28">
        {centers.map((center) => (
          <div key={center.name}>
            <div className="font-bold heading text-testibg2 text-lg">
              {center.name}
            </div>
            <div className="xl:w-[240px] w-[300px] pt-2 text-sm text-textColor">
              {center.address}
            </div>
            <div className="pt-1 text-sm text-textColor">
              Email: {center.email}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center sm:pt-[100px] pt-[60px] xl:pb-0 pb-20">
        <Link href="/network">
          <CustomButton
            title="More Locations"
            containerStyles="py-4 px-7 text-white bg-primaryColor hover:bg-hoverColor transition-all"
          />
        </Link>
      </div>
    </section>
  );
};

export default Centers;
