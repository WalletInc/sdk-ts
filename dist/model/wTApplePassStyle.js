"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTApplePassStyle = void 0;
class WTApplePassStyle extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTApplePassStyle.attributeTypeMap);
    }
}
exports.WTApplePassStyle = WTApplePassStyle;
WTApplePassStyle.discriminator = undefined;
WTApplePassStyle.attributeTypeMap = [
    {
        "name": "backgroundColor",
        "baseName": "backgroundColor",
        "type": "any"
    },
    {
        "name": "foregroundColor",
        "baseName": "foregroundColor",
        "type": "any"
    },
    {
        "name": "labelColor",
        "baseName": "labelColor",
        "type": "any"
    },
    {
        "name": "stripColor",
        "baseName": "stripColor",
        "type": "any"
    },
    {
        "name": "logoUrl",
        "baseName": "logoUrl",
        "type": "any"
    },
    {
        "name": "iconUrl",
        "baseName": "iconUrl",
        "type": "any"
    }
];
//# sourceMappingURL=wTApplePassStyle.js.map