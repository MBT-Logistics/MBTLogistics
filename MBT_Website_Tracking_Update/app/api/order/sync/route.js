import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

// Called by the MBT GR Generator (offline HTML) to publish GR statuses.
// Body: { key, items: [{ gr, status, from, to, date, pkgs, cw, dlv }] }
// The key must match the MBT_SYNC_KEY environment variable on Vercel.

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });

const stamp = () =>
  new Date()
    .toLocaleString("en-GB", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(/\//g, "-")
    .replace(",", "");

export const OPTIONS = async () => new Response(null, { status: 204, headers: CORS });

export const POST = async (request) => {
  let body;
  try {
    body = JSON.parse(await request.text());
  } catch (e) {
    return json({ ok: false, error: "bad data" }, 400);
  }

  const secret = process.env.MBT_SYNC_KEY;
  if (!secret) return json({ ok: false, error: "MBT_SYNC_KEY is not set on the server" }, 500);
  if (!body || body.key !== secret) return json({ ok: false, error: "bad key" }, 401);

  const items = Array.isArray(body.items) ? body.items.slice(0, 500) : [];
  try {
    await connectToDB();
    const now = stamp();
    let saved = 0;
    for (const it of items) {
      const orderid = String(it.gr || "").trim().toUpperCase();
      if (!orderid) continue;
      const status = String(it.status || "").trim();
      const doc = (await Order.findOne({ orderid })) || new Order({ orderid });
      const hist = Array.isArray(doc.history) ? doc.history : [];
      if (status && (!hist.length || hist[hist.length - 1].s !== status)) hist.push({ s: status, t: now });
      doc.set({
        dateofbooking: String(it.date || doc.dateofbooking || ""),
        originstation: String(it.from || doc.originstation || ""),
        deliverystation: String(it.to || doc.deliverystation || ""),
        noofpackages: Number(it.pkgs) || doc.noofpackages || 0,
        chargedweight: String(it.cw || doc.chargedweight || ""),
        deliverytype: String(it.dlv || doc.deliverytype || ""),
        status: status || doc.status || "",
        updated: now,
        history: hist,
      });
      await doc.save();
      saved++;
    }
    return json({ ok: true, saved });
  } catch (error) {
    return json({ ok: false, error: "database error" }, 500);
  }
};
