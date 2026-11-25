import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  const { orderid } = await params;
  const id = decodeURIComponent(String(orderid || "")).trim().toUpperCase().replace(/^GR\s*/, "");

  try {
    await connectToDB();

    const order = await Order.findOne({ orderid: id });
    if (!order) return new Response("Order Not Found", { status: 404 });

    // only what a customer needs to see
    const o = order.toObject();
    return new Response(
      JSON.stringify({
        orderid: o.orderid,
        dateofbooking: o.dateofbooking,
        originstation: o.originstation,
        deliverystation: o.deliverystation,
        noofpackages: o.noofpackages,
        chargedweight: o.chargedweight,
        deliverytype: o.deliverytype,
        status: o.status,
        updated: o.updated,
        history: o.history || [],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
