"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTServiceCreateParams = void 0;
class WTServiceCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTServiceCreateParams.attributeTypeMap);
    }
}
exports.WTServiceCreateParams = WTServiceCreateParams;
WTServiceCreateParams.discriminator = undefined;
WTServiceCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTServiceCreateParams.js.map