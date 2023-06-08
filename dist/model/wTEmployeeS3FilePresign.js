"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeS3FilePresign = void 0;
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
        "type": "string"
    }
];
exports.WTEmployeeS3FilePresign = WTEmployeeS3FilePresign;
//# sourceMappingURL=wTEmployeeS3FilePresign.js.map