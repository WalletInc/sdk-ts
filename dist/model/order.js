"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Order.attributeTypeMap);
    }
}
exports.Order = Order;
Order.discriminator = undefined;
Order.attributeTypeMap = [
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
        "name": "donorNote",
        "baseName": "donorNote",
        "type": "any"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "any"
    }
];
//# sourceMappingURL=order.js.map