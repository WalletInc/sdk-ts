"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateEntry = void 0;
class ProductUpdateEntry extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProductUpdateEntry.attributeTypeMap);
    }
}
exports.ProductUpdateEntry = ProductUpdateEntry;
ProductUpdateEntry.discriminator = undefined;
ProductUpdateEntry.attributeTypeMap = [
    {
        "name": "product",
        "baseName": "product",
        "type": "ProductKey"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ProductUpdateType"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "any"
    },
    {
        "name": "publishedAt",
        "baseName": "publishedAt",
        "type": "string"
    }
];
//# sourceMappingURL=productUpdateEntry.js.map