"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewsArticle {
    static getAttributeTypeMap() {
        return NewsArticle.attributeTypeMap;
    }
}
NewsArticle.discriminator = undefined;
NewsArticle.attributeTypeMap = [
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "SaveTicketSettingsRequestPaymentDesignID"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
exports.NewsArticle = NewsArticle;
//# sourceMappingURL=newsArticle.js.map