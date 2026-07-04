"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoUploadProvision = void 0;
class WTVideoUploadProvision extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVideoUploadProvision.attributeTypeMap);
    }
}
exports.WTVideoUploadProvision = WTVideoUploadProvision;
WTVideoUploadProvision.discriminator = undefined;
WTVideoUploadProvision.attributeTypeMap = [
    {
        "name": "provider",
        "baseName": "provider",
        "type": "WTVideoUploadProvisionProvider"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "{ [key: string]: any; }"
    },
    {
        "name": "assetId",
        "baseName": "assetId",
        "type": "any"
    },
    {
        "name": "hdIncluded",
        "baseName": "hdIncluded",
        "type": "any"
    }
];
//# sourceMappingURL=wTVideoUploadProvision.js.map