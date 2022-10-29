"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTNewsArticleUpdateParams = void 0;
class WTNewsArticleUpdateParams {
    static getAttributeTypeMap() {
        return WTNewsArticleUpdateParams.attributeTypeMap;
    }
}
exports.WTNewsArticleUpdateParams = WTNewsArticleUpdateParams;
WTNewsArticleUpdateParams.discriminator = undefined;
WTNewsArticleUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    }
];
//# sourceMappingURL=wTNewsArticleUpdateParams.js.map