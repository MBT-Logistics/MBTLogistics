import Image from "next/image";

const FeatureCard = ({ feature, containerStyles, textsize }) => {
  const { title, icon } = feature;
  return (
    <section>
      <div className={`${containerStyles}`}>
        <div className="pr-5 sm:pb-0 pb-3">
          <div className="items-center">
            <Image src={icon} width={65} height={65} alt="icon" />
          </div>
        </div>
        <div className="items-center">
          <h4 className={`font-normal ${textsize} text-headingColor`}>
            {title}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
