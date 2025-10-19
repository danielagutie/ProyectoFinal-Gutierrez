import { products } from "./products.js";

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
}

function getProductById(idProd) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.idProd == idProd);
      product ? resolve(product) : reject(new Error("Producto no encontrado"));
    }, 500);
  });
}

function getProductsByCategory(idCategory) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsByCategory = products.filter((p) => p.categoria === idCategory);
      productsByCategory ? resolve(productsByCategory) : reject(new Error("Se produjo un error al filtrar por categoría"));
    }, 500);
  });
}

export { getProducts };
export { getProductById };
export { getProductsByCategory };
