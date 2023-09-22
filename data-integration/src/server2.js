// curl -X POST "localhost:4001/cart" --data '{"id":"123"}'
import { createServer } from "node:http";
import { once } from "node:events";

const PORT = 4001;

async function handler(req, res) {
  if (req.method === "POST" && req.url.includes("cart")) {
    const data = await once(req, "data");
    const item = JSON.parse(data);
    console.log("received", item);
    return res.end(`process succeeded for ${item.id}`);
  }
}

createServer(handler)
  .listen(PORT)
  .on("listening", () => {
    console.log(`products API is running at ${PORT}`);
  });
