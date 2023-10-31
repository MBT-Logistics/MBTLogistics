const Numbers = () => {
  return (
    <section className="container sm:px-36 px-28 pb-16 pt-6">
      <div className="flex sm:flex-row flex-col justify-between">
        <div className="items-center sm:py-0 py-8">
          <div className="items-center">
            <p className="sm:text-[50px] text-[40px] text-headingColor font-extrabold heading text-center">
              100+
            </p>
          </div>
          <div>
            <h4 className="sm:text-[20px] text-[16px] text-headingColor font-normal text-center">
              Our Locations
            </h4>
          </div>
        </div>

        <div className="border border-nav-border" />

        <div className="items-center sm:py-0 py-8">
          <div className="items-center">
            <p className="sm:text-[50px] text-[40px] text-headingColor font-extrabold heading text-center">
              20000+
            </p>
          </div>
          <div>
            <h4 className="sm:text-[20px] text-[16px] text-headingColor font-normal text-center">
              Delivered Packages
            </h4>
          </div>
        </div>

        <div className="border border-nav-border" />

        <div className="items-center sm:py-0 py-8">
          <div className="items-center">
            <p className="sm:text-[50px] text-[40px] text-headingColor font-extrabold heading text-center">
              1000+
            </p>
          </div>
          <div>
            <h4 className="sm:text-[20px] text-[16px] text-headingColor font-normal text-center">
              Satisfied Clients
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
