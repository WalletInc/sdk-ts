"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRoomRateUpdateParams = void 0;
class WTRoomRateUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTRoomRateUpdateParams.attributeTypeMap);
    }
}
exports.WTRoomRateUpdateParams = WTRoomRateUpdateParams;
WTRoomRateUpdateParams.discriminator = undefined;
WTRoomRateUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTRoomRateUpdateParams.js.map