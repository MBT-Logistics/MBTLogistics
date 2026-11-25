import React from "react";

const STEPS = ["Booked", "Dispatched", "In Transit", "Reached Destination", "Out for Delivery", "Delivered"];

const Row = ({ label, value }) => (
  <div className="flex justify-between">
    <p className="font-bold text-right pr-8">{label}</p>
    <p>{value || "-"}</p>
  </div>
);

const OrderDetails = ({ data }) => {
  const history = Array.isArray(data.history) ? data.history : [];
  const reached = STEPS.indexOf(data.status === "POD Received" ? "Delivered" : data.status);
  const onTrack = reached >= 0;

  return (
    <section className="sm:container px-3 py-6 -mt-4" id="details">
      <div className="flex flex-col">
        <div className="flex justify-center items-center border-b border-nav-border">
          <h2 className="font-semibold heading text-headingColor text-center text-[28px] md:text-[35px] pb-3">
            Consignment Details
          </h2>
        </div>

        <div className="flex flex-col items-center pt-10">
          <p className="text-sm uppercase tracking-widest text-gray-500">Current Status</p>
          <p className="heading font-bold text-primaryColor text-[30px] md:text-[38px] text-center">
            {data.status || "Booked"}
          </p>
          {data.updated ? <p className="text-sm text-gray-500">Last updated: {data.updated}</p> : null}
        </div>

        {onTrack ? (
          <div className="pt-10 overflow-x-auto">
            <ol className="flex min-w-[640px] justify-between">
              {STEPS.map((s, i) => {
                const done = i <= reached;
                const when = [...history].reverse().find((h) => h.s === s);
                return (
                  <li key={s} className="flex-1 flex flex-col items-center text-center relative">
                    {i > 0 ? (
                      <span
                        className={`absolute top-[11px] right-1/2 w-full h-[3px] ${i <= reached ? "bg-primaryColor" : "bg-gray-200"}`}
                      />
                    ) : null}
                    <span
                      className={`relative z-10 w-6 h-6 rounded-full border-4 ${done ? "bg-primaryColor border-primaryColor" : "bg-white border-gray-300"}`}
                    />
                    <span className={`pt-2 text-[13px] font-semibold ${done ? "text-headingColor" : "text-gray-400"}`}>{s}</span>
                    <span className="text-[11px] text-gray-500">{when ? when.t : ""}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}

        <div className="flex justify-center items-center pt-12">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 gap-x-44">
            <Row label="GR Number:" value={data.orderid} />
            <Row label="Date of Booking:" value={data.dateofbooking} />
            <Row label="Origin Station (From):" value={data.originstation} />
            <Row label="Delivery Station (To):" value={data.deliverystation} />
            <Row label="No. of Packages:" value={data.noofpackages ? String(data.noofpackages) : ""} />
            <Row label="Charged Weight:" value={data.chargedweight} />
            <Row label="Delivery Type:" value={data.deliverytype} />
          </div>
        </div>

        {history.length ? (
          <div className="py-10 lg:px-64">
            <p className="font-bold text-headingColor text-[17px] border-b border-nav-border pb-2">Status history</p>
            <ul className="pt-3">
              {[...history].reverse().map((h, i) => (
                <li key={i} className="flex justify-between border-b border-nav-border py-2 text-[15px]">
                  <span className={i === 0 ? "font-semibold text-primaryColor" : ""}>{h.s}</span>
                  <span className="text-gray-500">{h.t}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default OrderDetails;
