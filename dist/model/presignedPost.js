"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PresignedPost {
    static getAttributeTypeMap() {
        return PresignedPost.attributeTypeMap;
    }
}
PresignedPost.discriminator = undefined;
PresignedPost.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "PresignedPostFields"
    }
];
exports.PresignedPost = PresignedPost;
//# sourceMappingURL=presignedPost.js.map