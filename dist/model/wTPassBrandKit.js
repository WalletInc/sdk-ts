"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPassBrandKit = void 0;
class WTPassBrandKit extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPassBrandKit.attributeTypeMap);
    }
}
exports.WTPassBrandKit = WTPassBrandKit;
WTPassBrandKit.discriminator = undefined;
WTPassBrandKit.attributeTypeMap = [
    {
        "name": "backgroundColor",
        "baseName": "backgroundColor",
        "type": "any"
    },
    {
        "name": "textColor",
        "baseName": "textColor",
        "type": "any"
    },
    {
        "name": "accentColor",
        "baseName": "accentColor",
        "type": "any"
    },
    {
        "name": "logoUrl",
        "baseName": "logoUrl",
        "type": "any"
    },
    {
        "name": "markUrl",
        "baseName": "markUrl",
        "type": "any"
    },
    {
        "name": "bannerImageUrl",
        "baseName": "bannerImageUrl",
        "type": "any"
    }
];
//# sourceMappingURL=wTPassBrandKit.js.map