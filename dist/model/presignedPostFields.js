"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresignedPostFields = void 0;
class PresignedPostFields extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresignedPostFields.attributeTypeMap);
    }
}
exports.PresignedPostFields = PresignedPostFields;
PresignedPostFields.discriminator = undefined;
PresignedPostFields.attributeTypeMap = [
    {
        "name": "policy",
        "baseName": "Policy",
        "type": "string"
    },
    {
        "name": "xAmzSignature",
        "baseName": "X-Amz-Signature",
        "type": "string"
    }
];
//# sourceMappingURL=presignedPostFields.js.map