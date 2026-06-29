"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTProductUpdateParams = void 0;
class WTProductUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTProductUpdateParams.attributeTypeMap);
    }
}
exports.WTProductUpdateParams = WTProductUpdateParams;
WTProductUpdateParams.discriminator = undefined;
WTProductUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTProductUpdateParams.js.map