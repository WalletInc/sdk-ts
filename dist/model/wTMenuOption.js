"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuOption = void 0;
class WTMenuOption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuOption.attributeTypeMap);
    }
}
exports.WTMenuOption = WTMenuOption;
WTMenuOption.discriminator = undefined;
WTMenuOption.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "priceDeltaCents",
        "baseName": "priceDeltaCents",
        "type": "any"
    },
    {
        "name": "isSoldOut",
        "baseName": "isSoldOut",
        "type": "any"
    }
];
//# sourceMappingURL=wTMenuOption.js.map