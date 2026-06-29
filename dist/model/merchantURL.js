"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantURL = void 0;
class MerchantURL extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MerchantURL.attributeTypeMap);
    }
}
exports.MerchantURL = MerchantURL;
MerchantURL.discriminator = undefined;
MerchantURL.attributeTypeMap = [
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "any"
    },
    {
        "name": "destinationURL",
        "baseName": "destinationURL",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=merchantURL.js.map