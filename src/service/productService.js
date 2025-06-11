const productRepository = require("../repositories/productRepository");

exports.createProduct = async (productDate) => {
  return await productRepository.createProduct(productDate);
};

exports.getProducts = async () => {
  return await productRepository.getAllProducts();
};

exports.getProductById = async (id) => {
  return await productRepository.getProductById(id);
};

exports.updateProduct = async (id, data) => {
  return await productRepository.updateProduct(id, data);
};

exports.deleteProduct = async (id) => {
  return await productRepository.deleteProduct(id);
};
