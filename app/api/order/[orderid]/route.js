import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params: { orderid } }) => {
  //   const { orderid } = await request.json();
  //   console.log(params);

  try {
    await connectToDB();

    const order = await Order.findOne({ orderid });
    if (!order) return new Response("Order Not Found", { status: 404 });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
