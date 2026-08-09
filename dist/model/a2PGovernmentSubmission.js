"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2PGovernmentSubmission = void 0;
class A2PGovernmentSubmission {
    static getAttributeTypeMap() {
        return A2PGovernmentSubmission.attributeTypeMap;
    }
}
exports.A2PGovernmentSubmission = A2PGovernmentSubmission;
A2PGovernmentSubmission.discriminator = undefined;
A2PGovernmentSubmission.attributeTypeMap = [
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
        "type": "BusinessClassificationGovernment"
    },
    {
        "name": "businessIndustry",
        "baseName": "businessIndustry",
        "type": "BusinessIndustryGOVERNMENT"
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
        "name": "billingConsent",
        "baseName": "billingConsent",
        "type": "A2PBillingConsent"
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
        "name": "isWalletSmsTermsRead",
        "baseName": "isWalletSmsTermsRead",
        "type": "any"
    },
    {
        "name": "isPricingUnderstood",
        "baseName": "isPricingUnderstood",
        "type": "any"
    },
    {
        "name": "isPrivacyAndTosPresent",
        "baseName": "isPrivacyAndTosPresent",
        "type": "any"
    },
    {
        "name": "privacyPolicyUrl",
        "baseName": "privacyPolicyUrl",
        "type": "any"
    },
    {
        "name": "willObtainConsent",
        "baseName": "willObtainConsent",
        "type": "any"
    },
    {
        "name": "willHonorOptOut",
        "baseName": "willHonorOptOut",
        "type": "any"
    },
    {
        "name": "willFollowContentRules",
        "baseName": "willFollowContentRules",
        "type": "any"
    },
    {
        "name": "willComplyLawAndHours",
        "baseName": "willComplyLawAndHours",
        "type": "any"
    },
    {
        "name": "infoIsAccurate",
        "baseName": "infoIsAccurate",
        "type": "any"
    }
];
//# sourceMappingURL=a2PGovernmentSubmission.js.map