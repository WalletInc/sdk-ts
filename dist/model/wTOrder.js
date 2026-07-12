"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTOrder = void 0;
class WTOrder extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTOrder.attributeTypeMap);
    }
}
exports.WTOrder = WTOrder;
WTOrder.discriminator = undefined;
WTOrder.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    },
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "OrderStatus"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "any"
    },
    {
        "name": "amountTotal",
        "baseName": "amountTotal",
        "type": "any"
    },
    {
        "name": "stripeCheckoutSessionID",
        "baseName": "stripeCheckoutSessionID",
        "type": "any"
    },
    {
        "name": "stripePaymentIntentID",
        "baseName": "stripePaymentIntentID",
        "type": "any"
    },
    {
        "name": "stripeChargeID",
        "baseName": "stripeChargeID",
        "type": "any"
    },
    {
        "name": "receiptURL",
        "baseName": "receiptURL",
        "type": "any"
    },
    {
        "name": "acquisitionSource",
        "baseName": "acquisitionSource",
        "type": "any"
    },
    {
        "name": "shareId",
        "baseName": "shareId",
        "type": "any"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "any"
    }
];
//# sourceMappingURL=wTOrder.js.map