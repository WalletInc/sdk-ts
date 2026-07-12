"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCertificateEntitlementSnapshot = void 0;
class WTCertificateEntitlementSnapshot extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCertificateEntitlementSnapshot.attributeTypeMap);
    }
}
exports.WTCertificateEntitlementSnapshot = WTCertificateEntitlementSnapshot;
WTCertificateEntitlementSnapshot.discriminator = undefined;
WTCertificateEntitlementSnapshot.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "any"
    }
];
//# sourceMappingURL=wTCertificateEntitlementSnapshot.js.map