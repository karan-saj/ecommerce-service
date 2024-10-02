// This file serves as the entry point for AWS Lambda functions, mapping GraphQL queries and mutations
// to the appropriate service methods for managing product information.
const { createProduct, getProduct, updateProduct, deleteProduct, listProducts } = require('./src/services/productService');

exports.createProduct = async (event) => {
    const { input } = event.arguments; // Extract input from GraphQL mutation
    try {
        const product = await createProduct(input); // Call service to create product
        return product; // Return the created product
    } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Could not create product.');
    }
};

exports.getProduct = async (event) => {
    const { ProductId } = event.arguments; // Extract ProductId from GraphQL query
    try {
        const product = await getProduct(ProductId); // Call service to get product
        return product; // Return the product
    } catch (error) {
        console.error('Error retrieving product:', error);
        throw new Error('Could not retrieve product.');
    }
};

exports.updateProduct = async (event) => {
    const { ProductId, input } = event.arguments; // Extract ProductId and input from GraphQL mutation
    try {
        const updatedProduct = await updateProduct(ProductId, input); // Call service to update product
        return updatedProduct; // Return the updated product
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Could not update product.');
    }
};

exports.deleteProduct = async (event) => {
    const { ProductId } = event.arguments; // Extract ProductId from GraphQL mutation
    try {
        await deleteProduct(ProductId); // Call service to delete product
        return `Product with ID ${ProductId} deleted successfully.`; // Return success message
    } catch (error) {
        console.error('Error deleting product:', error);
        throw new Error('Could not delete product.');
    }
};

exports.listProducts = async () => {
    try {
        const products = await listProducts(); // Call service to list all products
        return products; // Return the list of products
    } catch (error) {
        console.error('Error listing products:', error);
        throw new Error('Could not list products.');
    }
};
