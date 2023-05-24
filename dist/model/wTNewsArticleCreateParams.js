"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTNewsArticleCreateParams = void 0;
class WTNewsArticleCreateParams {
    static getAttributeTypeMap() {
        return WTNewsArticleCreateParams.attributeTypeMap;
    }
}
WTNewsArticleCreateParams.discriminator = undefined;
WTNewsArticleCreateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
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
exports.WTNewsArticleCreateParams = WTNewsArticleCreateParams;
//# sourceMappingURL=wTNewsArticleCreateParams.js.map