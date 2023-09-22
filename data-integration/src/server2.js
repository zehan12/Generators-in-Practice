import { createServer } from "http";
const PORT = 4001;

async function handler(req, res) {
    res.end("hey");
}

createServer(handler)
  .listen(PORT)
  .on("listening", () => {
    console.log(`products API is running at ${PORT}`);
  });