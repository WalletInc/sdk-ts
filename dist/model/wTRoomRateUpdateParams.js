"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTRoomRateUpdateParams {
    static getAttributeTypeMap() {
        return WTRoomRateUpdateParams.attributeTypeMap;
    }
}
WTRoomRateUpdateParams.discriminator = undefined;
WTRoomRateUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "displayedPrice",
        "baseName": "displayedPrice",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
        "type": "string"
    }
];
exports.WTRoomRateUpdateParams = WTRoomRateUpdateParams;
//# sourceMappingURL=wTRoomRateUpdateParams.js.map