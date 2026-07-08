"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLeadFiInquiryResult = void 0;
class WTLeadFiInquiryResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTLeadFiInquiryResult.attributeTypeMap);
    }
}
exports.WTLeadFiInquiryResult = WTLeadFiInquiryResult;
WTLeadFiInquiryResult.discriminator = undefined;
WTLeadFiInquiryResult.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "any"
    },
    {
        "name": "preQualification",
        "baseName": "preQualification",
        "type": "any"
    },
    {
        "name": "tier",
        "baseName": "tier",
        "type": "any"
    },
    {
        "name": "creditScore",
        "baseName": "creditScore",
        "type": "any"
    },
    {
        "name": "creditLimit",
        "baseName": "creditLimit",
        "type": "WTLeadFiCreditOffer"
    },
    {
        "name": "creditPreApproval",
        "baseName": "creditPreApproval",
        "type": "WTLeadFiCreditOffer"
    },
    {
        "name": "consumerProfile",
        "baseName": "consumerProfile",
        "type": "WTLeadFiConsumerProfile"
    }
];
//# sourceMappingURL=wTLeadFiInquiryResult.js.map