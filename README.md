# eCommerce Microservice

## Overview
This project is a microservice developed to manage product information for an eCommerce application. It uses AWS services such as AppSync, Lambda, and DynamoDB to provide a robust backend capable of handling high traffic and performance demands.

## Features
- Create, retrieve, update, and delete product information.
- Integration with AWS AppSync for GraphQL API.
- Utilizes AWS Lambda for serverless execution of business logic.
- Data is stored in DynamoDB for fast access and scalability.

## Technologies Used
- Node.js
- AWS AppSync
- AWS Lambda
- DynamoDB
- AWS IAM

### Basic Architecture Diagram

[Client Application]
|
|  (1) GraphQL Request: getProduct / createProduct
v
[AWS AppSync]
|
|  (2) Invoke: getProduct / createProduct
|--------------------------|
|                          |
v                          v
[Lambda Function: getProduct]   [Lambda Function: createProduct]
|                          |
|  (3) Query Product      |  (3) Insert Product
v                          v
[DynamoDB: Products Table]     [DynamoDB: Products Table]
|                          |
|  (4) Return Product      |  (4) Confirmation
v                          v
[Lambda Function: getProduct]   [Lambda Function: createProduct]
|                          |
|  (5) Return Response     |  (5) Return Response
v                          v
[AWS AppSync]
|
|  (6) GraphQL Response
v
[Client Application]

