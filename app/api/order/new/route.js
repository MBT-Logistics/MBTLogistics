import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const body = await request.json();
  if (!process.env.MBT_SYNC_KEY || body.key !== process.env.MBT_SYNC_KEY)
    return new Response("Unauthorized", { status: 401 });
  const {
    orderid,
    dateofbooking,
    originstation,
    deliverystation,
    noofpackages,
    chargedweight,
    status,
    deliverytype,
  } = body;

  try {
    await connectToDB();
    const newOrder = new Order({
      orderid,
      dateofbooking,
      originstation,
      deliverystation,
      noofpackages,
      chargedweight,
      status,
      deliverytype,
    });

    await newOrder.save();
    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Order", { status: 500 });
  }
};
