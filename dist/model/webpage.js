"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webpage = void 0;
class Webpage {
    static getAttributeTypeMap() {
        return Webpage.attributeTypeMap;
    }
}
Webpage.discriminator = undefined;
Webpage.attributeTypeMap = [
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
        "name": "category",
        "baseName": "category",
        "type": "string"
    },
    {
        "name": "adminPage",
        "baseName": "adminPage",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "systemName",
        "baseName": "systemName",
        "type": "string"
    },
    {
        "name": "isPublic",
        "baseName": "isPublic",
        "type": "boolean"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "icons",
        "baseName": "icons",
        "type": "Array<string>"
    }
];
exports.Webpage = Webpage;
//# sourceMappingURL=webpage.js.map