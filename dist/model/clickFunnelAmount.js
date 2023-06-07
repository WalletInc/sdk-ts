"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelAmount = void 0;
class ClickFunnelAmount {
    static getAttributeTypeMap() {
        return ClickFunnelAmount.attributeTypeMap;
    }
}
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
exports.ClickFunnelAmount = ClickFunnelAmount;
//# sourceMappingURL=clickFunnelAmount.js.map