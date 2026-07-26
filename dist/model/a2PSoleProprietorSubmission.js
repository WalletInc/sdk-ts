"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2PSoleProprietorSubmission = void 0;
class A2PSoleProprietorSubmission {
    static getAttributeTypeMap() {
        return A2PSoleProprietorSubmission.attributeTypeMap;
    }
}
exports.A2PSoleProprietorSubmission = A2PSoleProprietorSubmission;
A2PSoleProprietorSubmission.discriminator = undefined;
A2PSoleProprietorSubmission.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "any"
    },
    {
        "name": "businessName",
        "baseName": "businessName",
        "type": "any"
    },
    {
        "name": "businessType",
        "baseName": "businessType",
        "type": "BusinessTypeSoleProprietorship"
    },
    {
        "name": "address1",
        "baseName": "address1",
        "type": "any"
    },
    {
        "name": "address2",
        "baseName": "address2",
        "type": "any"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "any"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "any"
    },
    {
        "name": "postalCode",
        "baseName": "postalCode",
        "type": "any"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "any"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "isTwilioTermsRead",
        "baseName": "isTwilioTermsRead",
        "type": "any"
    },
    {
        "name": "isPrivacyPolicyOnWebsite",
        "baseName": "isPrivacyPolicyOnWebsite",
        "type": "any"
    },
    {
        "name": "isTosOnWebsite",
        "baseName": "isTosOnWebsite",
        "type": "any"
    },
    {
        "name": "isStopUnderstood",
        "baseName": "isStopUnderstood",
        "type": "any"
    },
    {
        "name": "isManualRead",
        "baseName": "isManualRead",
        "type": "any"
    },
    {
        "name": "isCtiaShortCodeRead",
        "baseName": "isCtiaShortCodeRead",
        "type": "any"
    },
    {
        "name": "isStandardsUnderstood",
        "baseName": "isStandardsUnderstood",
        "type": "any"
    },
    {
        "name": "isShortCodeUnderstood",
        "baseName": "isShortCodeUnderstood",
        "type": "any"
    },
    {
        "name": "isOptInOutUnderstood",
        "baseName": "isOptInOutUnderstood",
        "type": "any"
    },
    {
        "name": "isShortCodeTransferUnderstood",
        "baseName": "isShortCodeTransferUnderstood",
        "type": "any"
    },
    {
        "name": "isPricingUnderstood",
        "baseName": "isPricingUnderstood",
        "type": "any"
    },
    {
        "name": "isShortCodeTimelineUnderstood",
        "baseName": "isShortCodeTimelineUnderstood",
        "type": "any"
    },
    {
        "name": "verificationMobile",
        "baseName": "verificationMobile",
        "type": "string"
    }
];
//# sourceMappingURL=a2PSoleProprietorSubmission.js.map