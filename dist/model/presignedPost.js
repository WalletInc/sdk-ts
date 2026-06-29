"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresignedPost = void 0;
class PresignedPost extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresignedPost.attributeTypeMap);
    }
}
exports.PresignedPost = PresignedPost;
PresignedPost.discriminator = undefined;
PresignedPost.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "PresignedPostFields"
    }
];
//# sourceMappingURL=presignedPost.js.map