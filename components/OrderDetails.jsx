import React from "react";

const STEPS = ["Booked", "Dispatched", "In Transit", "Reached Destination", "Out for Delivery", "Delivered"];

const Info = ({ label, value }) => (
  <div className="flex flex-col gap-1 border border-nav-border rounded-lg px-5 py-4 bg-white">
    <span className="text-[12px] uppercase tracking-widest text-[#6b7280]">{label}</span>
    <span className="text-[17px] font-semibold text-headingColor">{value || "-"}</span>
  </div>
);

const OrderDetails = ({ data }) => {
  const status = data.status || "Booked";
  const reached = STEPS.indexOf(status === "POD Received" ? "Delivered" : status);
  const onTrack = reached >= 0;
  const delivered = reached === STEPS.length - 1;

  return (
    <section className="sm:container px-3 py-6 -mt-4" id="details">
      <div className="max-w-[980px] mx-auto border border-nav-border rounded-2xl overflow-hidden shadow-sm">
        {/* header: GR number + status */}
        <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4 bg-primaryColor text-white px-6 sm:px-10 py-6">
          <div>
            <p className="text-[12px] uppercase tracking-widest opacity-80">Consignment Note / GR No.</p>
            <p className="heading text-[26px] sm:text-[32px] font-bold leading-tight">{data.orderid}</p>
          </div>
          <span
            className={`self-start sm:self-center rounded-full px-5 py-2 text-[15px] font-semibold ${
              delivered ? "bg-white text-primaryColor" : "bg-white/15 text-white border border-white/60"
            }`}
          >
            {status}
          </span>
        </div>

        {/* route */}
        <div className="px-6 sm:px-10 pt-8 pb-2 bg-light-white">
          <div className="flex sm:flex-row flex-col sm:items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <p className="text-[12px] uppercase tracking-widest text-[#6b7280]">Origin</p>
              <p className="text-[22px] font-bold text-headingColor">{data.originstation || "-"}</p>
            </div>
            <div className="sm:flex-1 flex items-center gap-2 text-primaryColor" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-primaryColor" />
              <span className="flex-1 border-t-2 border-dashed border-primaryColor min-w-[60px]" />
              <span className="text-[22px] leading-none">➜</span>
            </div>
            <div className="flex-1 sm:text-right">
              <p className="text-[12px] uppercase tracking-widest text-[#6b7280]">Destination</p>
              <p className="text-[22px] font-bold text-headingColor">{data.deliverystation || "-"}</p>
            </div>
          </div>
        </div>

        {/* milestones */}
        {onTrack ? (
          <div className="px-6 sm:px-10 pt-8 pb-8 bg-light-white">
            {/* desktop / tablet: horizontal */}
            <ol className="sm:flex hidden justify-between">
              {STEPS.map((s, i) => {
                const done = i <= reached;
                const current = i === reached;
                return (
                  <li key={s} className="flex-1 flex flex-col items-center text-center relative">
                    {i > 0 ? (
                      <span className={`absolute top-[11px] right-1/2 w-full h-[3px] ${done ? "bg-primaryColor" : "bg-[#e5e7eb]"}`} />
                    ) : null}
                    <span
                      className={`relative z-10 w-6 h-6 rounded-full border-4 ${
                        done ? "bg-primaryColor border-primaryColor" : "bg-white border-[#d1d5db]"
                      } ${current ? "ring-4 ring-primaryColor/25" : ""}`}
                    />
                    <span className={`pt-2 text-[13px] ${current ? "font-bold text-primaryColor" : done ? "font-semibold text-headingColor" : "text-[#9ca3af]"}`}>
                      {s}
                    </span>
                  </li>
                );
              })}
            </ol>
            {/* mobile: vertical */}
            <ol className="sm:hidden flex flex-col">
              {STEPS.map((s, i) => {
                const done = i <= reached;
                const current = i === reached;
                return (
                  <li key={s} className="flex items-start gap-4 relative pb-5 last:pb-0">
                    {i < STEPS.length - 1 ? (
                      <span className={`absolute left-[11px] top-6 w-[3px] h-full ${i < reached ? "bg-primaryColor" : "bg-[#e5e7eb]"}`} />
                    ) : null}
                    <span
                      className={`relative z-10 w-6 h-6 shrink-0 rounded-full border-4 ${
                        done ? "bg-primaryColor border-primaryColor" : "bg-white border-[#d1d5db]"
                      } ${current ? "ring-4 ring-primaryColor/25" : ""}`}
                    />
                    <span className={`text-[15px] leading-6 ${current ? "font-bold text-primaryColor" : done ? "font-semibold text-headingColor" : "text-[#9ca3af]"}`}>
                      {s}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}

        {/* shipment details */}
        <div className="px-6 sm:px-10 py-8 bg-white border-t border-nav-border">
          <p className="font-semibold text-headingColor text-[18px] pb-4">Shipment Details</p>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <Info label="Booking Date" value={data.dateofbooking} />
            <Info label="No. of Packages" value={data.noofpackages ? String(data.noofpackages) : ""} />
            <Info label="Charged Weight" value={data.chargedweight} />
            <Info label="Delivery Type" value={data.deliverytype ? `${data.deliverytype} Delivery` : ""} />
          </div>
          <p className="text-[13px] text-[#6b7280] pt-6">
            For any query about this consignment, please contact MBT Logistics with your GR number.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
