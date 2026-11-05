"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCartLineOption = void 0;
class WTCartLineOption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCartLineOption.attributeTypeMap);
    }
}
exports.WTCartLineOption = WTCartLineOption;
WTCartLineOption.discriminator = undefined;
WTCartLineOption.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "groupTitle",
        "baseName": "groupTitle",
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
    }
];
//# sourceMappingURL=wTCartLineOption.js.map