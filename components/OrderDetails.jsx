import React from "react";

const OrderDetails = ({ data }) => {
  return (
    <section className="sm:container px-3 py-6 -mt-4" id="details">
      <div className="flex flex-col">
        <div className="flex justify-center items-center border-b border-nav-border">
          <h2 className="font-semibold heading text-headingColor text-center text-[28px] md:text-[35px] pb-3">
            Consignment Details
          </h2>
        </div>
        <div className="flex justify-center items-center pt-12">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 gap-x-44">
            <div className="flex justify-between">
              <p className="font-bold text-right pr-8">LR Number:</p>
              <p>{data.orderid}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-right pr-8">Date of Booking:</p>
              <p>{data.dateofbooking}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-right pr-8">
                Origin Station (From):
              </p>
              <p>{data.originstation}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-right pr-8">
                Delivery Station (To):
              </p>
              <p>{data.deliverystation}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-right pr-8">No. of Packages :</p>
              <p>{data.noofpackages}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-right pr-8">Charged Weight:</p>
              <p>{data.chargedweight}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-right pr-8">Delivery Type:</p>
              <p>{data.deliverytype}</p>
            </div>
          </div>
        </div>
        <div className="py-7 lg:px-64">
          <div className="flex justify-center border-t border-b border-nav-border py-2">
            <p className="text-left">
              <span className="font-bold text-headingColor text-[17px]">
                Status:
              </span>{" "}
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
