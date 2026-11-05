"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuCreateParams = void 0;
class WTMenuCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuCreateParams.attributeTypeMap);
    }
}
exports.WTMenuCreateParams = WTMenuCreateParams;
WTMenuCreateParams.discriminator = undefined;
WTMenuCreateParams.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTMenuCreateParams.js.map