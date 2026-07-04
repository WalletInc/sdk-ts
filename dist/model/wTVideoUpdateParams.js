"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTVideoUpdateParams = void 0;
class WTVideoUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTVideoUpdateParams.attributeTypeMap);
    }
}
exports.WTVideoUpdateParams = WTVideoUpdateParams;
WTVideoUpdateParams.discriminator = undefined;
WTVideoUpdateParams.attributeTypeMap = [
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
        "type": "any"
    },
    {
        "name": "additionalInfoURL",
        "baseName": "additionalInfoURL",
        "type": "any"
    }
];
//# sourceMappingURL=wTVideoUpdateParams.js.map