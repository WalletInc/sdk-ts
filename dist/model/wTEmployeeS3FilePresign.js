"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTEmployeeS3FilePresign {
    static getAttributeTypeMap() {
        return WTEmployeeS3FilePresign.attributeTypeMap;
    }
}
WTEmployeeS3FilePresign.discriminator = undefined;
WTEmployeeS3FilePresign.attributeTypeMap = [
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "string"
    },
    {
        "name": "fileType",
        "baseName": "fileType",
        "type": "string"
    },
    {
        "name": "context",
        "baseName": "context",
        "type": "WTEmployeeS3FilePresignContext"
    }
];
exports.WTEmployeeS3FilePresign = WTEmployeeS3FilePresign;
//# sourceMappingURL=wTEmployeeS3FilePresign.js.map