"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBillingSavePaymentMethod = void 0;
class WTBillingSavePaymentMethod extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTBillingSavePaymentMethod.attributeTypeMap);
    }
}
exports.WTBillingSavePaymentMethod = WTBillingSavePaymentMethod;
WTBillingSavePaymentMethod.discriminator = undefined;
WTBillingSavePaymentMethod.attributeTypeMap = [
    {
        "name": "paymentMethodID",
        "baseName": "paymentMethodID",
        "type": "any"
    }
];
//# sourceMappingURL=wTBillingSavePaymentMethod.js.map