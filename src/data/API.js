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
      console.log("hola");
      productsByCategory ? resolve(productsByCategory) : reject(new Error("Categoria no encontrada"));
    }, 500);
  });
}

export { getProducts };
export { getProductById };
export { getProductsByCategory };
