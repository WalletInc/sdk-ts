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
    },
    {
        "name": "verificationMobile",
        "baseName": "verificationMobile",
        "type": "string"
    }
];
//# sourceMappingURL=a2PSoleProprietorSubmission.js.map