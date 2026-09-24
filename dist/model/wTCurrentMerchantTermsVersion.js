"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCurrentMerchantTermsVersion = void 0;
class WTCurrentMerchantTermsVersion extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCurrentMerchantTermsVersion.attributeTypeMap);
    }
}
exports.WTCurrentMerchantTermsVersion = WTCurrentMerchantTermsVersion;
WTCurrentMerchantTermsVersion.discriminator = undefined;
WTCurrentMerchantTermsVersion.attributeTypeMap = [
    {
        "name": "documentType",
        "baseName": "documentType",
        "type": "MerchantTermsDocumentType"
    },
    {
        "name": "versionId",
        "baseName": "versionId",
        "type": "any"
    },
    {
        "name": "effectiveDate",
        "baseName": "effectiveDate",
        "type": "any"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    }
];
//# sourceMappingURL=wTCurrentMerchantTermsVersion.js.map