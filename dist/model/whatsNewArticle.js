"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsNewArticle = void 0;
class WhatsNewArticle extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WhatsNewArticle.attributeTypeMap);
    }
}
exports.WhatsNewArticle = WhatsNewArticle;
WhatsNewArticle.discriminator = undefined;
WhatsNewArticle.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "story",
        "baseName": "story",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "any"
    },
    {
        "name": "stages",
        "baseName": "stages",
        "type": "any"
    },
    {
        "name": "publishedAt",
        "baseName": "publishedAt",
        "type": "string"
    },
    {
        "name": "announcedAt",
        "baseName": "announcedAt",
        "type": "string"
    }
];
//# sourceMappingURL=whatsNewArticle.js.map