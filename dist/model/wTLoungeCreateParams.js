"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLoungeCreateParams = void 0;
class WTLoungeCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTLoungeCreateParams.attributeTypeMap);
    }
}
exports.WTLoungeCreateParams = WTLoungeCreateParams;
WTLoungeCreateParams.discriminator = undefined;
WTLoungeCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTLoungeCreateParams.js.map