"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTCPAPrivacyRequest = void 0;
class WTTCPAPrivacyRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTCPAPrivacyRequest.attributeTypeMap);
    }
}
exports.WTTCPAPrivacyRequest = WTTCPAPrivacyRequest;
WTTCPAPrivacyRequest.discriminator = undefined;
WTTCPAPrivacyRequest.attributeTypeMap = [
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "any"
    },
    {
        "name": "receivedVia",
        "baseName": "receivedVia",
        "type": "WTPrivacyRequestChannel"
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "any"
    }
];
//# sourceMappingURL=wTTCPAPrivacyRequest.js.map