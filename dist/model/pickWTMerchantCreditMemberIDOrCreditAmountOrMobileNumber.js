"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber = void 0;
class PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber {
    static getAttributeTypeMap() {
        return PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber.attributeTypeMap;
    }
}
PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber.discriminator = undefined;
PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber.attributeTypeMap = [
    {
        "name": "memberID",
        "baseName": "memberID",
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
    }
];
exports.PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber = PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber;
//# sourceMappingURL=pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber.js.map