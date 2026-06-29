"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMerchantCreditHistory = void 0;
class MSMerchantCreditHistory extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMerchantCreditHistory.attributeTypeMap);
    }
}
exports.MSMerchantCreditHistory = MSMerchantCreditHistory;
MSMerchantCreditHistory.discriminator = undefined;
MSMerchantCreditHistory.attributeTypeMap = [
    {
        "name": "memberIdentifier",
        "baseName": "memberIdentifier",
        "type": "any"
    },
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "creditAmount",
        "baseName": "creditAmount",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=mSMerchantCreditHistory.js.map