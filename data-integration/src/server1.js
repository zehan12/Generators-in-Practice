import { createServer } from "http";
const PORT = 3001;

async function handler(req, res) {
    if ( req.method === "GET" && req.url.includes("products") ){
        console.log("request:",req.url);
    }
}

createServer(handler)
  .listen(PORT)
  .on("listening", () => {
    console.log(`products API is running at ${PORT}`);
  });
