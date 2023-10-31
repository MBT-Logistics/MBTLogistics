"use client";

import { useEffect, useState } from "react";
import { CustomButton, OrderDetails } from ".";

const Track = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({});

  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  const handleScroll = () => {
    const nextSection = document.getElementById("details");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = {
      orderid: String(e.target.orderid.value),
    };
    const response = await fetch(`/api/order/${data.orderid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      console.log("Consignment Found");
      const data2 = await response.json();
      setOrder(data2);
      setLoading(false);
      //reset
      e.target.orderid.value = "";
      setTimeout(() => {
        handleScroll();
      }, 500);
    }
    if (!response.ok) {
      console.log("Error finding consignment");
      setLoading(false);
      alert("Consignment Not Found");
    }
  }

  useEffect(() => {
    setOrder({});
  }, []);

  return (
    <>
      <section className="sm:container sm:py-28 py-20 px-3">
        <div className="track2_section">
          <div className="sm:graygradient graygradientsm">
            <div className="lg:p-28 sm:p-10 p-6 flex justify-between lg:flex-row flex-col">
              <div className="lg:py-14">
                <h2 className="heading font-bold text-white sm:text-[40px] text-[30px] sm:w-[380px] w-[300px]">
                  Book and track consignments anytime, anywhere
                </h2>
              </div>
              <div className="lg:py-0 py-12">
                <div className="bg-light-white rounded-lg sm:p-12 p-7">
                  <div className="flex justify-center">
                    <h2 className="heading font-semibold sm:text-[35px] text-[29px] text-center">
                      Track Your{" "}
                      <span className="text-primaryColor">Consignment</span>
                    </h2>
                  </div>
                  <div className="pt-9">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1">
                        <input
                          type="text"
                          placeholder="LR Number*"
                          className="border-2 border-testibg sm:py-4 py-3 px-5 sm:placeholder:text-lg placeholder:text-sm"
                          size={40}
                          id="orderid"
                          onInput={toInputUppercase}
                          required
                        />
                      </div>
                      <div className="pt-9 flex justify-center">
                        <CustomButton
                          title="Track"
                          btnType="submit"
                          isDisabled={loading}
                          containerStyles="py-4 px-7 text-white bg-primaryColor hover:bg-hoverColor transition-all disabled:bg-tagbg disabled:text-tagbg2"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {Object.keys(order).length > 0 ? <OrderDetails data={order} /> : ""}
    </>
  );
};

export default Track;
