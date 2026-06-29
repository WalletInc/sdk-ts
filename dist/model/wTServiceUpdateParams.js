"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTServiceUpdateParams = void 0;
class WTServiceUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTServiceUpdateParams.attributeTypeMap);
    }
}
exports.WTServiceUpdateParams = WTServiceUpdateParams;
WTServiceUpdateParams.discriminator = undefined;
WTServiceUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTServiceUpdateParams.js.map