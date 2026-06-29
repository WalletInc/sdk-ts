"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Product.attributeTypeMap);
    }
}
exports.Product = Product;
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
        "type": "any"
    },
    {
        "name": "isHourly",
        "baseName": "isHourly",
        "type": "boolean"
    }
];
//# sourceMappingURL=product.js.map