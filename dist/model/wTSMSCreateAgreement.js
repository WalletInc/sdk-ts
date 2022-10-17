"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSMSCreateAgreement = void 0;
class WTSMSCreateAgreement {
    static getAttributeTypeMap() {
        return WTSMSCreateAgreement.attributeTypeMap;
    }
}
exports.WTSMSCreateAgreement = WTSMSCreateAgreement;
WTSMSCreateAgreement.discriminator = undefined;
WTSMSCreateAgreement.attributeTypeMap = [
    {
        "name": "isTwilioTermsRead",
        "baseName": "isTwilioTermsRead",
        "type": "boolean"
    },
    {
        "name": "isPrivacyPolicyOnWebsite",
        "baseName": "isPrivacyPolicyOnWebsite",
        "type": "boolean"
    },
    {
        "name": "isTosOnWebsite",
        "baseName": "isTosOnWebsite",
        "type": "boolean"
    },
    {
        "name": "isStopUnderstood",
        "baseName": "isStopUnderstood",
        "type": "boolean"
    },
    {
        "name": "isManualRead",
        "baseName": "isManualRead",
        "type": "boolean"
    },
    {
        "name": "isCtiaShortCodeRead",
        "baseName": "isCtiaShortCodeRead",
        "type": "boolean"
    },
    {
        "name": "isStandardsUnderstood",
        "baseName": "isStandardsUnderstood",
        "type": "boolean"
    },
    {
        "name": "isShortCodeUnderstood",
        "baseName": "isShortCodeUnderstood",
        "type": "boolean"
    },
    {
        "name": "isOptInOutUnderstood",
        "baseName": "isOptInOutUnderstood",
        "type": "boolean"
    },
    {
        "name": "isShortCodeTransferUnderstood",
        "baseName": "isShortCodeTransferUnderstood",
        "type": "boolean"
    },
    {
        "name": "isPricingUnderstood",
        "baseName": "isPricingUnderstood",
        "type": "boolean"
    },
    {
        "name": "isShortCodeTimelineUnderstood",
        "baseName": "isShortCodeTimelineUnderstood",
        "type": "boolean"
    }
];
//# sourceMappingURL=wTSMSCreateAgreement.js.map