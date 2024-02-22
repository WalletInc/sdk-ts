"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelAmount = void 0;
class ClickFunnelAmount {
    static getAttributeTypeMap() {
        return ClickFunnelAmount.attributeTypeMap;
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