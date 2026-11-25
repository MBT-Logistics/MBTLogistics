import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  orderid: {
    type: String,
    unique: [true, "Order already exists!"],
    required: [true, "Order ID id required"],
  },
  dateofbooking: { type: String, default: "" },
  originstation: { type: String, default: "" },
  deliverystation: { type: String, default: "" },
  noofpackages: { type: Number, default: 0 },
  chargedweight: { type: String, default: "" },
  status: { type: String, default: "" },
  deliverytype: { type: String, default: "" },
  updated: { type: String, default: "" },
  history: { type: [{ s: String, t: String, _id: false }], default: [] },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
