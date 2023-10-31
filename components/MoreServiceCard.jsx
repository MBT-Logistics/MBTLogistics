import Image from "next/image";

const MoreServiceCard = ({ service }) => {
  const { title, text, icon, w, h, t } = service;
  return (
    <section>
      <div className="lg:w-[360px]">
        <div className="pb-5">
          <Image src={icon} width={w} height={h} alt="Icons" />
        </div>
        <div className={`pt-${t}`}>
          <div>
            <h4 className="heading text-xl md:text-[25px] font-normal pb-2 w-[500px]">
              {title}
            </h4>
          </div>
          <div className="">
            <p className="font-medium text-textColor">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServiceCard;
