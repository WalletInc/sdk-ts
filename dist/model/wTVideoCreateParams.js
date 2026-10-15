"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoCreateParams = void 0;
class WTVideoCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVideoCreateParams.attributeTypeMap);
    }
}
exports.WTVideoCreateParams = WTVideoCreateParams;
WTVideoCreateParams.discriminator = undefined;
WTVideoCreateParams.attributeTypeMap = [
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
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
        "type": "any"
    },
    {
        "name": "assetId",
        "baseName": "assetId",
        "type": "any"
    },
    {
        "name": "provider",
        "baseName": "provider",
        "type": "VideoProvider"
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "any"
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "any"
    },
    {
        "name": "durationSeconds",
        "baseName": "durationSeconds",
        "type": "any"
    },
    {
        "name": "posterURL",
        "baseName": "posterURL",
        "type": "any"
    }
];
//# sourceMappingURL=wTVideoCreateParams.js.map