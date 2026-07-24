"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateIngestAck = void 0;
class ProductUpdateIngestAck extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProductUpdateIngestAck.attributeTypeMap);
    }
}
exports.ProductUpdateIngestAck = ProductUpdateIngestAck;
ProductUpdateIngestAck.discriminator = undefined;
ProductUpdateIngestAck.attributeTypeMap = [
    {
        "name": "received",
        "baseName": "received",
        "type": "boolean"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "ProductKey"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "string"
    }
];
//# sourceMappingURL=productUpdateIngestAck.js.map