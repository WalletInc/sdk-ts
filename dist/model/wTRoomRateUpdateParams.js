"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRoomRateUpdateParams = void 0;
class WTRoomRateUpdateParams {
    static getAttributeTypeMap() {
        return WTRoomRateUpdateParams.attributeTypeMap;
    }
}
exports.WTRoomRateUpdateParams = WTRoomRateUpdateParams;
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
//# sourceMappingURL=wTRoomRateUpdateParams.js.map