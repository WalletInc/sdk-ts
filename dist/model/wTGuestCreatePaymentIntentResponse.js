"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGuestCreatePaymentIntentResponse = void 0;
class WTGuestCreatePaymentIntentResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGuestCreatePaymentIntentResponse.attributeTypeMap);
    }
}
exports.WTGuestCreatePaymentIntentResponse = WTGuestCreatePaymentIntentResponse;
WTGuestCreatePaymentIntentResponse.discriminator = undefined;
WTGuestCreatePaymentIntentResponse.attributeTypeMap = [
    {
        "name": "orderID",
        "baseName": "orderID",
        "type": "any"
    },
    {
        "name": "reservationID",
        "baseName": "reservationID",
        "type": "any"
    },
    {
        "name": "chargeModel",
        "baseName": "chargeModel",
        "type": "WTGuestCreatePaymentIntentResponse.ChargeModelEnum"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "any"
    },
    {
        "name": "clientSecret",
        "baseName": "clientSecret",
        "type": "any"
    },
    {
        "name": "paymentIntentID",
        "baseName": "paymentIntentID",
        "type": "any"
    },
    {
        "name": "connectedAccountId",
        "baseName": "connectedAccountId",
        "type": "any"
    },
    {
        "name": "publishableKey",
        "baseName": "publishableKey",
        "type": "any"
    },
    {
        "name": "amountBreakdown",
        "baseName": "amountBreakdown",
        "type": "WTGuestAmountBreakdown"
    }
];
(function (WTGuestCreatePaymentIntentResponse) {
    let ChargeModelEnum;
    (function (ChargeModelEnum) {
        ChargeModelEnum[ChargeModelEnum["Direct"] = 'direct'] = "Direct";
    })(ChargeModelEnum = WTGuestCreatePaymentIntentResponse.ChargeModelEnum || (WTGuestCreatePaymentIntentResponse.ChargeModelEnum = {}));
})(WTGuestCreatePaymentIntentResponse = exports.WTGuestCreatePaymentIntentResponse || (exports.WTGuestCreatePaymentIntentResponse = {}));
//# sourceMappingURL=wTGuestCreatePaymentIntentResponse.js.map