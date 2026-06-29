"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webpage = void 0;
class Webpage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Webpage.attributeTypeMap);
    }
}
exports.Webpage = Webpage;
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "any"
    },
    {
        "name": "adminPage",
        "baseName": "adminPage",
        "type": "any"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "any"
    },
    {
        "name": "systemName",
        "baseName": "systemName",
        "type": "any"
    },
    {
        "name": "isPublic",
        "baseName": "isPublic",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "any"
    },
    {
        "name": "icons",
        "baseName": "icons",
        "type": "any"
    }
];
//# sourceMappingURL=webpage.js.map