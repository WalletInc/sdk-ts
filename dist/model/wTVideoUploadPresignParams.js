"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoUploadPresignParams = void 0;
class WTVideoUploadPresignParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVideoUploadPresignParams.attributeTypeMap);
    }
}
exports.WTVideoUploadPresignParams = WTVideoUploadPresignParams;
WTVideoUploadPresignParams.discriminator = undefined;
WTVideoUploadPresignParams.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "fileType",
        "baseName": "fileType",
        "type": "any"
    }
];
//# sourceMappingURL=wTVideoUploadPresignParams.js.map