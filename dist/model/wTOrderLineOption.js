"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTOrderLineOption = void 0;
class WTOrderLineOption extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTOrderLineOption.attributeTypeMap);
    }
}
exports.WTOrderLineOption = WTOrderLineOption;
WTOrderLineOption.discriminator = undefined;
WTOrderLineOption.attributeTypeMap = [
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
//# sourceMappingURL=wTOrderLineOption.js.map