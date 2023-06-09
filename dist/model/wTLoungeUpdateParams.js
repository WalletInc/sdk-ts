"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLoungeUpdateParams = void 0;
class WTLoungeUpdateParams {
    static getAttributeTypeMap() {
        return WTLoungeUpdateParams.attributeTypeMap;
    }
}
WTLoungeUpdateParams.discriminator = undefined;
WTLoungeUpdateParams.attributeTypeMap = [
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
exports.WTLoungeUpdateParams = WTLoungeUpdateParams;
//# sourceMappingURL=wTLoungeUpdateParams.js.map