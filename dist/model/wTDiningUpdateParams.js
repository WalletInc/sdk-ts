"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTDiningUpdateParams = void 0;
class WTDiningUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTDiningUpdateParams.attributeTypeMap);
    }
}
exports.WTDiningUpdateParams = WTDiningUpdateParams;
WTDiningUpdateParams.discriminator = undefined;
WTDiningUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTDiningUpdateParams.js.map