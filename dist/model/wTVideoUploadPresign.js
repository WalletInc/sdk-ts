"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoUploadPresign = void 0;
class WTVideoUploadPresign extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVideoUploadPresign.attributeTypeMap);
    }
}
exports.WTVideoUploadPresign = WTVideoUploadPresign;
WTVideoUploadPresign.discriminator = undefined;
WTVideoUploadPresign.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "fields",
        "baseName": "fields",
        "type": "{ [key: string]: any; }"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "any"
    },
    {
        "name": "publicURL",
        "baseName": "publicURL",
        "type": "any"
    }
];
//# sourceMappingURL=wTVideoUploadPresign.js.map