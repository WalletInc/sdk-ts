"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoUploadProvisionParams = void 0;
class WTVideoUploadProvisionParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVideoUploadProvisionParams.attributeTypeMap);
    }
}
exports.WTVideoUploadProvisionParams = WTVideoUploadProvisionParams;
WTVideoUploadProvisionParams.discriminator = undefined;
WTVideoUploadProvisionParams.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "fileType",
        "baseName": "fileType",
        "type": "any"
    },
    {
        "name": "maxDurationSeconds",
        "baseName": "maxDurationSeconds",
        "type": "any"
    }
];
//# sourceMappingURL=wTVideoUploadProvisionParams.js.map