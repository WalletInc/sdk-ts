"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantCreditCreationParams = void 0;
class WTMerchantCreditCreationParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMerchantCreditCreationParams.attributeTypeMap);
    }
}
exports.WTMerchantCreditCreationParams = WTMerchantCreditCreationParams;
WTMerchantCreditCreationParams.discriminator = undefined;
WTMerchantCreditCreationParams.attributeTypeMap = [
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
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    }
];
//# sourceMappingURL=wTMerchantCreditCreationParams.js.map