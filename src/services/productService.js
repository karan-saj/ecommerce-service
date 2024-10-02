// This file contains the business logic for managing product data.
// It provides functions for creating, retrieving, updating, and deleting products
// in the DynamoDB database.

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'Products';

// Function to create a product in DynamoDB
exports.createProduct = async (product) => {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            ProductId: product.productId,
            Name: product.name,
            Description: product.description,
            Price: product.price,
            Category: product.category,
            Stock: product.stock,
            CreatedAt: new Date().toISOString(),
            UpdatedAt: new Date().toISOString(),
        },
    };

    await dynamoDb.put(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Product created successfully!' }),
    };
};

// Function to retrieve a product from DynamoDB
exports.getProduct = async (productId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { ProductId: productId },
    };

    const result = await dynamoDb.get(params).promise();
    if (!result.Item) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Product not found' }),
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify(result.Item),
    };
};

// Function to update a product in DynamoDB
exports.updateProduct = async (productId, productUpdates) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { ProductId: productId },
        UpdateExpression: 'set #name = :name, #description = :description, #price = :price, #category = :category, #stock = :stock, #updatedAt = :updatedAt',
        ExpressionAttributeNames: {
            '#name': 'Name',
            '#description': 'Description',
            '#price': 'Price',
            '#category': 'Category',
            '#stock': 'Stock',
            '#updatedAt': 'UpdatedAt',
        },
        ExpressionAttributeValues: {
            ':name': productUpdates.name,
            ':description': productUpdates.description,
            ':price': productUpdates.price,
            ':category': productUpdates.category,
            ':stock': productUpdates.stock,
            ':updatedAt': new Date().toISOString(),
        },
    };

    await dynamoDb.update(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Product updated successfully!' }),
    };
};

// Function to delete a product from DynamoDB
exports.deleteProduct = async (productId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { ProductId: productId },
    };

    await dynamoDb.delete(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Product deleted successfully!' }),
    };
};
