"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRoomRateCreateParams = void 0;
class WTRoomRateCreateParams {
    static getAttributeTypeMap() {
        return WTRoomRateCreateParams.attributeTypeMap;
    }
}
WTRoomRateCreateParams.discriminator = undefined;
WTRoomRateCreateParams.attributeTypeMap = [
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
exports.WTRoomRateCreateParams = WTRoomRateCreateParams;
//# sourceMappingURL=wTRoomRateCreateParams.js.map