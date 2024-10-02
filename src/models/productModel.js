// This file defines the Product class, representing the structure of product data
// It ensures consistency in how product information is created and managed.

class Product {
    constructor({ ProductId, Name, Description, Price, Category, Stock, CreatedAt, UpdatedAt }) {
        this.ProductId = ProductId;
        this.Name = Name;
        this.Description = Description || "";
        this.Price = Price;
        this.Category = Category;
        this.Stock = Stock || 0;
        this.CreatedAt = CreatedAt || new Date().toISOString();
        this.UpdatedAt = UpdatedAt || new Date().toISOString();
    }

    // Additional methods can be added here as needed
}

module.exports = Product;
