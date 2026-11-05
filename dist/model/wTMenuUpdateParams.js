"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuUpdateParams = void 0;
class WTMenuUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuUpdateParams.attributeTypeMap);
    }
}
exports.WTMenuUpdateParams = WTMenuUpdateParams;
WTMenuUpdateParams.discriminator = undefined;
WTMenuUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTMenuUpdateParams.js.map