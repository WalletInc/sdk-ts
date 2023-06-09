"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTNewsArticleUpdateParams = void 0;
class WTNewsArticleUpdateParams {
    static getAttributeTypeMap() {
        return WTNewsArticleUpdateParams.attributeTypeMap;
    }
}
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
    },
    {
        "name": "publishedDate",
        "baseName": "publishedDate",
        "type": "Date"
    }
];
exports.WTNewsArticleUpdateParams = WTNewsArticleUpdateParams;
//# sourceMappingURL=wTNewsArticleUpdateParams.js.map