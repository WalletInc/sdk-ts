"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MerchantURL {
    static getAttributeTypeMap() {
        return MerchantURL.attributeTypeMap;
    }
}
MerchantURL.discriminator = undefined;
MerchantURL.attributeTypeMap = [
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "destinationURL",
        "baseName": "destinationURL",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "SaveTicketSettingsRequestPaymentDesignID"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.MerchantURL = MerchantURL;
//# sourceMappingURL=merchantURL.js.map