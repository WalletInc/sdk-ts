"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTConnectPaymentsSummaryBalance = void 0;
class WTConnectPaymentsSummaryBalance {
    static getAttributeTypeMap() {
        return WTConnectPaymentsSummaryBalance.attributeTypeMap;
    }
}
exports.WTConnectPaymentsSummaryBalance = WTConnectPaymentsSummaryBalance;
WTConnectPaymentsSummaryBalance.discriminator = undefined;
WTConnectPaymentsSummaryBalance.attributeTypeMap = [
    {
        "name": "pending",
        "baseName": "pending",
        "type": "any"
    },
    {
        "name": "available",
        "baseName": "available",
        "type": "any"
    }
];
//# sourceMappingURL=wTConnectPaymentsSummaryBalance.js.map