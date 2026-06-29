"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeS3FilePresign = void 0;
class WTEmployeeS3FilePresign extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeS3FilePresign.attributeTypeMap);
    }
}
exports.WTEmployeeS3FilePresign = WTEmployeeS3FilePresign;
WTEmployeeS3FilePresign.discriminator = undefined;
WTEmployeeS3FilePresign.attributeTypeMap = [
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
        "name": "context",
        "baseName": "context",
        "type": "WTEmployeeS3FilePresignContext"
    }
];
//# sourceMappingURL=wTEmployeeS3FilePresign.js.map