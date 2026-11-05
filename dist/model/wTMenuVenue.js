"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuVenue = void 0;
class WTMenuVenue extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuVenue.attributeTypeMap);
    }
}
exports.WTMenuVenue = WTMenuVenue;
WTMenuVenue.discriminator = undefined;
WTMenuVenue.attributeTypeMap = [
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
        "name": "venueTitle",
        "baseName": "venueTitle",
        "type": "any"
    }
];
//# sourceMappingURL=wTMenuVenue.js.map