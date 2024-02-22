"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PresignedPostFields extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresignedPostFields.attributeTypeMap);
    }
}
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
exports.PresignedPostFields = PresignedPostFields;
//# sourceMappingURL=presignedPostFields.js.map