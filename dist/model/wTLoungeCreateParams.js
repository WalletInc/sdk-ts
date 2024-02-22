"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLoungeCreateParams = void 0;
class WTLoungeCreateParams {
    static getAttributeTypeMap() {
        return WTLoungeCreateParams.attributeTypeMap;
    }
}
exports.WTLoungeCreateParams = WTLoungeCreateParams;
WTLoungeCreateParams.discriminator = undefined;
WTLoungeCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTLoungeCreateParams.js.map