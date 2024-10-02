// This file acts as the controller for product-related operations.
// It handles the incoming requests and responses, interacting with the product service
// to perform operations such as creating, retrieving, updating, and deleting products.

const productService = require('../services/productService');

// Handler to create a product
exports.createProduct = async (event) => {
    const product = JSON.parse(event.body);
    return await productService.createProduct(product);
};

// Handler to retrieve a product
exports.getProduct = async (event) => {
    const productId = event.pathParameters.productId;
    return await productService.getProduct(productId);
};

// Handler to update a product
exports.updateProduct = async (event) => {
    const productId = event.pathParameters.productId;
    const productUpdates = JSON.parse(event.body);
    return await productService.updateProduct(productId, productUpdates);
};

// Handler to delete a product
exports.deleteProduct = async (event) => {
    const productId = event.pathParameters.productId;
    return await productService.deleteProduct(productId);
};
