"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTCPAPrivacyRequestForMerchant = void 0;
class WTTCPAPrivacyRequestForMerchant extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTCPAPrivacyRequestForMerchant.attributeTypeMap);
    }
}
exports.WTTCPAPrivacyRequestForMerchant = WTTCPAPrivacyRequestForMerchant;
WTTCPAPrivacyRequestForMerchant.discriminator = undefined;
WTTCPAPrivacyRequestForMerchant.attributeTypeMap = [
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
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "WTTCPAPrivacyRequestForMerchantMerchantID"
    }
];
//# sourceMappingURL=wTTCPAPrivacyRequestForMerchant.js.map