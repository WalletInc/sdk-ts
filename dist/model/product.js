"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    static getAttributeTypeMap() {
        return Product.attributeTypeMap;
    }
}
Product.discriminator = undefined;
Product.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "titleFull",
        "baseName": "titleFull",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "string"
    },
    {
        "name": "iconName",
        "baseName": "iconName",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "plans",
        "baseName": "plans",
        "type": "Array<Plan>"
    },
    {
        "name": "isHourly",
        "baseName": "isHourly",
        "type": "boolean"
    }
];
exports.Product = Product;
//# sourceMappingURL=product.js.map