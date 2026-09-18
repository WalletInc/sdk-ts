"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPassStyleResponse = void 0;
class WTPassStyleResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPassStyleResponse.attributeTypeMap);
    }
}
exports.WTPassStyleResponse = WTPassStyleResponse;
WTPassStyleResponse.discriminator = undefined;
WTPassStyleResponse.attributeTypeMap = [
    {
        "name": "brand",
        "baseName": "brand",
        "type": "WTPassBrandKit"
    },
    {
        "name": "effective",
        "baseName": "effective",
        "type": "WTPassBrandKit"
    },
    {
        "name": "providers",
        "baseName": "providers",
        "type": "WTPassStyleResponseProviders"
    },
    {
        "name": "google",
        "baseName": "google",
        "type": "WTPassStyleResponseGoogle"
    },
    {
        "name": "apple",
        "baseName": "apple",
        "type": "WTPassStyleResponseApple"
    }
];
//# sourceMappingURL=wTPassStyleResponse.js.map