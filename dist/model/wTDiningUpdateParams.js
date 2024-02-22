"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDiningUpdateParams = void 0;
class WTDiningUpdateParams {
    static getAttributeTypeMap() {
        return WTDiningUpdateParams.attributeTypeMap;
    }
}
exports.WTDiningUpdateParams = WTDiningUpdateParams;
WTDiningUpdateParams.discriminator = undefined;
WTDiningUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTDiningUpdateParams.js.map