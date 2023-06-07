"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTRoomRateUpdateParams = void 0;
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
        "name": "displayValue",
        "baseName": "displayValue",
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
    }
];
exports.WTRoomRateUpdateParams = WTRoomRateUpdateParams;
//# sourceMappingURL=wTRoomRateUpdateParams.js.map