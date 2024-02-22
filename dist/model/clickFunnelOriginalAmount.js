"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelOriginalAmount = void 0;
class ClickFunnelOriginalAmount {
    static getAttributeTypeMap() {
        return ClickFunnelOriginalAmount.attributeTypeMap;
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