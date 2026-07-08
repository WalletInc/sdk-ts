"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTConnectPaymentsSummary = void 0;
class WTConnectPaymentsSummary extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTConnectPaymentsSummary.attributeTypeMap);
    }
}
exports.WTConnectPaymentsSummary = WTConnectPaymentsSummary;
WTConnectPaymentsSummary.discriminator = undefined;
WTConnectPaymentsSummary.attributeTypeMap = [
    {
        "name": "balance",
        "baseName": "balance",
        "type": "WTConnectPaymentsSummaryBalance"
    },
    {
        "name": "recentPayouts",
        "baseName": "recentPayouts",
        "type": "any"
    },
    {
        "name": "recentCharges",
        "baseName": "recentCharges",
        "type": "any"
    }
];
//# sourceMappingURL=wTConnectPaymentsSummary.js.map