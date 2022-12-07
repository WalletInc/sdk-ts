"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresignedPost = void 0;
class PresignedPost {
    static getAttributeTypeMap() {
        return PresignedPost.attributeTypeMap;
    }
}
exports.PresignedPost = PresignedPost;
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
//# sourceMappingURL=presignedPost.js.map