"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2PApplicationSubmission = void 0;
class A2PApplicationSubmission {
    static getAttributeTypeMap() {
        return A2PApplicationSubmission.attributeTypeMap;
    }
}
exports.A2PApplicationSubmission = A2PApplicationSubmission;
A2PApplicationSubmission.discriminator = undefined;
A2PApplicationSubmission.attributeTypeMap = [
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
    },
    {
        "name": "businessName",
        "baseName": "businessName",
        "type": "string"
    },
    {
        "name": "businessType",
        "baseName": "businessType",
        "type": "BusinessType"
    },
    {
        "name": "businessClassification",
        "baseName": "businessClassification",
        "type": "BusinessClassification"
    },
    {
        "name": "businessIndustry",
        "baseName": "businessIndustry",
        "type": "BusinessIndustry"
    },
    {
        "name": "taxIDType",
        "baseName": "taxIDType",
        "type": "BusinessRegistrationIdentifier"
    },
    {
        "name": "taxID",
        "baseName": "taxID",
        "type": "string"
    },
    {
        "name": "websiteURL",
        "baseName": "websiteURL",
        "type": "string"
    },
    {
        "name": "socialMediaURL",
        "baseName": "socialMediaURL",
        "type": "string"
    },
    {
        "name": "regionsOfOperation",
        "baseName": "regionsOfOperation",
        "type": "Array<BusinessRegionsOfOperation>"
    },
    {
        "name": "stockExchange",
        "baseName": "stockExchange",
        "type": "BusinessStockExchanges"
    },
    {
        "name": "stockTicker",
        "baseName": "stockTicker",
        "type": "string"
    },
    {
        "name": "messagingVolumeHigh",
        "baseName": "messagingVolumeHigh",
        "type": "boolean"
    },
    {
        "name": "address1",
        "baseName": "address1",
        "type": "string"
    },
    {
        "name": "address2",
        "baseName": "address2",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postalCode",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "string"
    },
    {
        "name": "jobPosition",
        "baseName": "jobPosition",
        "type": "JobPosition"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    }
];
//# sourceMappingURL=a2PApplicationSubmission.js.map