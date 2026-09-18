"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGooglePassStyle = void 0;
class WTGooglePassStyle extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGooglePassStyle.attributeTypeMap);
    }
}
exports.WTGooglePassStyle = WTGooglePassStyle;
WTGooglePassStyle.discriminator = undefined;
WTGooglePassStyle.attributeTypeMap = [
    {
        "name": "backgroundColor",
        "baseName": "backgroundColor",
        "type": "any"
    },
    {
        "name": "logoUrl",
        "baseName": "logoUrl",
        "type": "any"
    },
    {
        "name": "heroImageUrl",
        "baseName": "heroImageUrl",
        "type": "any"
    }
];
//# sourceMappingURL=wTGooglePassStyle.js.map