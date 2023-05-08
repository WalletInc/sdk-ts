"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditHistory = void 0;
class MSMerchantCreditHistory {
    static getAttributeTypeMap() {
        return MSMerchantCreditHistory.attributeTypeMap;
    }
}
MSMerchantCreditHistory.discriminator = undefined;
MSMerchantCreditHistory.attributeTypeMap = [
    {
        "name": "memberIdentifier",
        "baseName": "memberIdentifier",
        "type": "string"
    },
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "string"
    },
    {
        "name": "creditAmount",
        "baseName": "creditAmount",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantCreditID",
        "baseName": "merchantCreditID",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.MSMerchantCreditHistory = MSMerchantCreditHistory;
//# sourceMappingURL=mSMerchantCreditHistory.js.map