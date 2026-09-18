"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPassStyleResponseApple = void 0;
class WTPassStyleResponseApple {
    static getAttributeTypeMap() {
        return WTPassStyleResponseApple.attributeTypeMap;
    }
}
exports.WTPassStyleResponseApple = WTPassStyleResponseApple;
WTPassStyleResponseApple.discriminator = undefined;
WTPassStyleResponseApple.attributeTypeMap = [
    {
        "name": "effective",
        "baseName": "effective",
        "type": "WTApplePassStyle"
    },
    {
        "name": "style",
        "baseName": "style",
        "type": "WTApplePassStyle"
    }
];
//# sourceMappingURL=wTPassStyleResponseApple.js.map