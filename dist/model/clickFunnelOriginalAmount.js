"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelOriginalAmount = void 0;
class ClickFunnelOriginalAmount extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClickFunnelOriginalAmount.attributeTypeMap);
    }
}
exports.ClickFunnelOriginalAmount = ClickFunnelOriginalAmount;
ClickFunnelOriginalAmount.discriminator = undefined;
ClickFunnelOriginalAmount.attributeTypeMap = [
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
//# sourceMappingURL=clickFunnelOriginalAmount.js.map