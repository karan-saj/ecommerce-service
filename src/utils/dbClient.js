// This file manages the connection to AWS DynamoDB.
// It provides a wrapper around the DynamoDB DocumentClient to facilitate common database operations.

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const dbClient = {
    get: (params) => dynamoDb.get(params).promise(),
    put: (params) => dynamoDb.put(params).promise(),
    update: (params) => dynamoDb.update(params).promise(),
    delete: (params) => dynamoDb.delete(params).promise(),
    query: (params) => dynamoDb.query(params).promise(),
    scan: (params) => dynamoDb.scan(params).promise(),
};

module.exports = dbClient;
