import Image from "next/image";

const ServiceCard = ({ service }) => {
  const { title, text, icon, w, h } = service;
  return (
    <section>
      <div className="sm:flex sm:flex-row">
        <div className="sm:pr-6 sm:flex pb-5">
          <Image src={icon} width={w} height={h} alt="Icons" />
        </div>
        <div className="sm:border-l sm:border-nav-border sm:pl-4">
          <div>
            <h4 className="text-xl md:text-2xl font-medium pb-2">{title}</h4>
          </div>
          <div className="sm:w[200px] w-[265px]">
            <p className="font-medium text-textColor">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
