// This file contains the GraphQL resolvers that connect the GraphQL schema
// to the underlying service functions for managing products.

const productService = require('../services/productService');

const productResolvers = {
    Query: {
        getProduct: async (_, { ProductId }) => {
            return await productService.getProduct(ProductId);
        },
        listProducts: async () => {
            return await productService.listProducts();
        },
    },
    Mutation: {
        createProduct: async (_, { input }) => {
            return await productService.createProduct(input);
        },
        updateProduct: async (_, { ProductId, input }) => {
            return await productService.updateProduct(ProductId, input);
        },
        deleteProduct: async (_, { ProductId }) => {
            return await productService.deleteProduct(ProductId);
        },
    },
};

module.exports = productResolvers;
