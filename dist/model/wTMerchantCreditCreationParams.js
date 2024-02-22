"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantCreditCreationParams = void 0;
class WTMerchantCreditCreationParams {
    static getAttributeTypeMap() {
        return WTMerchantCreditCreationParams.attributeTypeMap;
    }
}
exports.WTMerchantCreditCreationParams = WTMerchantCreditCreationParams;
WTMerchantCreditCreationParams.discriminator = undefined;
WTMerchantCreditCreationParams.attributeTypeMap = [
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
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    }
];
//# sourceMappingURL=wTMerchantCreditCreationParams.js.map