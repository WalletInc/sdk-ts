"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2PBillingConsent = void 0;
class A2PBillingConsent extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(A2PBillingConsent.attributeTypeMap);
    }
}
exports.A2PBillingConsent = A2PBillingConsent;
A2PBillingConsent.discriminator = undefined;
A2PBillingConsent.attributeTypeMap = [
    {
        "name": "version",
        "baseName": "version",
        "type": "any"
    },
    {
        "name": "acceptedAt",
        "baseName": "acceptedAt",
        "type": "any"
    },
    {
        "name": "text",
        "baseName": "text",
        "type": "any"
    }
];
//# sourceMappingURL=a2PBillingConsent.js.map