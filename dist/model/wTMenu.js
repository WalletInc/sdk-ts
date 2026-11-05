"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenu = void 0;
class WTMenu extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenu.attributeTypeMap);
    }
}
exports.WTMenu = WTMenu;
WTMenu.discriminator = undefined;
WTMenu.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
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
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "any"
    },
    {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "any"
    },
    {
        "name": "schedule",
        "baseName": "schedule",
        "type": "any"
    },
    {
        "name": "categories",
        "baseName": "categories",
        "type": "any"
    },
    {
        "name": "venueType",
        "baseName": "venueType",
        "type": "WTMenuVenueType"
    },
    {
        "name": "venueID",
        "baseName": "venueID",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTMenu.js.map