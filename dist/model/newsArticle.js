"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsArticle = void 0;
class NewsArticle extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NewsArticle.attributeTypeMap);
    }
}
exports.NewsArticle = NewsArticle;
NewsArticle.discriminator = undefined;
NewsArticle.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "any"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "any"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "any"
    },
    {
        "name": "publishedDate",
        "baseName": "publishedDate",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=newsArticle.js.map