"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLoungeUpdateParams = void 0;
class WTLoungeUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTLoungeUpdateParams.attributeTypeMap);
    }
}
exports.WTLoungeUpdateParams = WTLoungeUpdateParams;
WTLoungeUpdateParams.discriminator = undefined;
WTLoungeUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTLoungeUpdateParams.js.map