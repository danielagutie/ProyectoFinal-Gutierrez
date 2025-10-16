import { products } from "./products.js";

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
}

export default getProducts;