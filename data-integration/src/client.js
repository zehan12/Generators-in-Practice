/*
    -> data enrichment - data processing
    1. we read data from a database
    2. go to a second API to more  detailed information
    3. we submit data to other API
*/

const DB = async () =>
  Array.from(
    {
      length: 1000,
    },
    (val, index) => `${index}-laptop`
  );

const PRODUCTS_API = "http://localhost:3001/products";
const CART_API = "http://localhost:4001/cart";

const processData = async () => {
  const products = await DB();
  const responses = [];
  for (const product of products) {
    const productInfo = await (
      await fetch(`${PRODUCTS_API}?name=${product}`)
    ).text();
    responses.push(productInfo);
    const cartInfo = await (await fetch(CART_API, {
      method: "POST",
      body: productInfo,
    })).text();
    responses.push(cartInfo);
  }
  return responses;
};

console.table(await processData());
