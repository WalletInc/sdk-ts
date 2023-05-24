"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agreement = void 0;
class Agreement {
    static getAttributeTypeMap() {
        return Agreement.attributeTypeMap;
    }
}
Agreement.discriminator = undefined;
Agreement.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "isManualRead",
        "baseName": "isManualRead",
        "type": "boolean"
    },
    {
        "name": "isPricingUnderstood",
        "baseName": "isPricingUnderstood",
        "type": "boolean"
    },
    {
        "name": "isTwilioTermsRead",
        "baseName": "isTwilioTermsRead",
        "type": "boolean"
    },
    {
        "name": "isShortCodeUnderstood",
        "baseName": "isShortCodeUnderstood",
        "type": "boolean"
    },
    {
        "name": "isShortCodeTimelineUnderstood",
        "baseName": "isShortCodeTimelineUnderstood",
        "type": "boolean"
    },
    {
        "name": "isShortCodeTransferUnderstood",
        "baseName": "isShortCodeTransferUnderstood",
        "type": "boolean"
    },
    {
        "name": "isOptInOutUnderstood",
        "baseName": "isOptInOutUnderstood",
        "type": "boolean"
    },
    {
        "name": "isPrivacyPolicyOnWebsite",
        "baseName": "isPrivacyPolicyOnWebsite",
        "type": "boolean"
    },
    {
        "name": "isCtiaShortCodeRead",
        "baseName": "isCtiaShortCodeRead",
        "type": "boolean"
    },
    {
        "name": "isTosOnWebsite",
        "baseName": "isTosOnWebsite",
        "type": "boolean"
    },
    {
        "name": "isStandardsUnderstood",
        "baseName": "isStandardsUnderstood",
        "type": "boolean"
    },
    {
        "name": "isStopUnderstood",
        "baseName": "isStopUnderstood",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.Agreement = Agreement;
//# sourceMappingURL=agreement.js.map