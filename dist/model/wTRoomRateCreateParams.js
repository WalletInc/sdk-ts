"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRoomRateCreateParams = void 0;
class WTRoomRateCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRoomRateCreateParams.attributeTypeMap);
    }
}
exports.WTRoomRateCreateParams = WTRoomRateCreateParams;
WTRoomRateCreateParams.discriminator = undefined;
WTRoomRateCreateParams.attributeTypeMap = [
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
        "name": "displayedPrice",
        "baseName": "displayedPrice",
        "type": "any"
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
        "type": "any"
    }
];
//# sourceMappingURL=wTRoomRateCreateParams.js.map