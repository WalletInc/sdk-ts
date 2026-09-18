"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPassStyleResponseGoogle = void 0;
class WTPassStyleResponseGoogle {
    static getAttributeTypeMap() {
        return WTPassStyleResponseGoogle.attributeTypeMap;
    }
}
exports.WTPassStyleResponseGoogle = WTPassStyleResponseGoogle;
WTPassStyleResponseGoogle.discriminator = undefined;
WTPassStyleResponseGoogle.attributeTypeMap = [
    {
        "name": "effective",
        "baseName": "effective",
        "type": "WTGooglePassStyle"
    },
    {
        "name": "style",
        "baseName": "style",
        "type": "WTGooglePassStyle"
    }
];
//# sourceMappingURL=wTPassStyleResponseGoogle.js.map