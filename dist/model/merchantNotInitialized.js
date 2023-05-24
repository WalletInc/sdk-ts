"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantNotInitialized = void 0;
class MerchantNotInitialized {
    static getAttributeTypeMap() {
        return MerchantNotInitialized.attributeTypeMap;
    }
}
MerchantNotInitialized.discriminator = undefined;
MerchantNotInitialized.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "stack",
        "baseName": "stack",
        "type": "string"
    },
    {
        "name": "httpErrorCode",
        "baseName": "httpErrorCode",
        "type": "number"
    },
    {
        "name": "trackingCode",
        "baseName": "trackingCode",
        "type": "string"
    }
];
exports.MerchantNotInitialized = MerchantNotInitialized;
//# sourceMappingURL=merchantNotInitialized.js.map