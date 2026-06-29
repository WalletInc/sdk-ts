"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelAmount = void 0;
class ClickFunnelAmount extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClickFunnelAmount.attributeTypeMap);
    }
}
exports.ClickFunnelAmount = ClickFunnelAmount;
ClickFunnelAmount.discriminator = undefined;
ClickFunnelAmount.attributeTypeMap = [
    {
        "name": "cents",
        "baseName": "cents",
        "type": "number"
    },
    {
        "name": "currencyIso",
        "baseName": "currency_iso",
        "type": "string"
    }
];
//# sourceMappingURL=clickFunnelAmount.js.map