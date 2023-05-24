"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelOriginalAmount = void 0;
class ClickFunnelOriginalAmount {
    static getAttributeTypeMap() {
        return ClickFunnelOriginalAmount.attributeTypeMap;
    }
}
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
exports.ClickFunnelOriginalAmount = ClickFunnelOriginalAmount;
//# sourceMappingURL=clickFunnelOriginalAmount.js.map