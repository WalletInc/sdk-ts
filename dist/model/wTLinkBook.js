"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLinkBook = void 0;
class WTLinkBook {
    static getAttributeTypeMap() {
        return WTLinkBook.attributeTypeMap;
    }
}
WTLinkBook.discriminator = undefined;
WTLinkBook.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "linkBookSectionID",
        "baseName": "linkBookSectionID",
        "type": "string | number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
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
exports.WTLinkBook = WTLinkBook;
//# sourceMappingURL=wTLinkBook.js.map