"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2PNonProfitSubmission = void 0;
class A2PNonProfitSubmission {
    static getAttributeTypeMap() {
        return A2PNonProfitSubmission.attributeTypeMap;
    }
}
exports.A2PNonProfitSubmission = A2PNonProfitSubmission;
A2PNonProfitSubmission.discriminator = undefined;
A2PNonProfitSubmission.attributeTypeMap = [
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
        "name": "businessClassification",
        "baseName": "businessClassification",
        "type": "BusinessClassificationNonProfit"
    },
    {
        "name": "businessIndustry",
        "baseName": "businessIndustry",
        "type": "BusinessIndustryNOTFORPROFIT"
    },
    {
        "name": "taxIDType",
        "baseName": "taxIDType",
        "type": "BusinessRegistrationIdentifier"
    },
    {
        "name": "taxID",
        "baseName": "taxID",
        "type": "any"
    },
    {
        "name": "websiteURL",
        "baseName": "websiteURL",
        "type": "any"
    },
    {
        "name": "socialMediaURL",
        "baseName": "socialMediaURL",
        "type": "any"
    },
    {
        "name": "regionsOfOperation",
        "baseName": "regionsOfOperation",
        "type": "any"
    },
    {
        "name": "messagingVolumeHigh",
        "baseName": "messagingVolumeHigh",
        "type": "any"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "any"
    },
    {
        "name": "jobPosition",
        "baseName": "jobPosition",
        "type": "JobPosition"
    },
    {
        "name": "businessName",
        "baseName": "businessName",
        "type": "any"
    },
    {
        "name": "businessType",
        "baseName": "businessType",
        "type": "BusinessTypeNonProfit"
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
    }
];
//# sourceMappingURL=a2PNonProfitSubmission.js.map