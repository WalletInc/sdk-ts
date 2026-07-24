"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateIngestBody = void 0;
class ProductUpdateIngestBody extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProductUpdateIngestBody.attributeTypeMap);
    }
}
exports.ProductUpdateIngestBody = ProductUpdateIngestBody;
ProductUpdateIngestBody.discriminator = undefined;
ProductUpdateIngestBody.attributeTypeMap = [
    {
        "name": "product",
        "baseName": "product",
        "type": "ProductKey"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "any"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ProductUpdateType"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "any"
    },
    {
        "name": "publishedAt",
        "baseName": "publishedAt",
        "type": "any"
    }
];
//# sourceMappingURL=productUpdateIngestBody.js.map