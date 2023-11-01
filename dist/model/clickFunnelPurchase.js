"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelPurchase = void 0;
class ClickFunnelPurchase {
    static getAttributeTypeMap() {
        return ClickFunnelPurchase.attributeTypeMap;
    }
}
exports.ClickFunnelPurchase = ClickFunnelPurchase;
ClickFunnelPurchase.discriminator = undefined;
ClickFunnelPurchase.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<ClickFunnelProduct>"
    },
    {
        "name": "memberId",
        "baseName": "member_id",
        "type": "any"
    },
    {
        "name": "contact",
        "baseName": "contact",
        "type": "ClickFunnelContact"
    },
    {
        "name": "funnelId",
        "baseName": "funnel_id",
        "type": "number"
    },
    {
        "name": "stripeCustomerToken",
        "baseName": "stripe_customer_token",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "Date"
    },
    {
        "name": "subscriptionId",
        "baseName": "subscription_id",
        "type": "any"
    },
    {
        "name": "chargeId",
        "baseName": "charge_id",
        "type": "any"
    },
    {
        "name": "ctransreceipt",
        "baseName": "ctransreceipt",
        "type": "any"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "fulfillmentStatus",
        "baseName": "fulfillment_status",
        "type": "any"
    },
    {
        "name": "fulfillmentId",
        "baseName": "fulfillment_id",
        "type": "any"
    },
    {
        "name": "fulfillments",
        "baseName": "fulfillments",
        "type": "object"
    },
    {
        "name": "paymentsCount",
        "baseName": "payments_count",
        "type": "any"
    },
    {
        "name": "infusionsoftCcid",
        "baseName": "infusionsoft_ccid",
        "type": "any"
    },
    {
        "name": "oapCustomerId",
        "baseName": "oap_customer_id",
        "type": "any"
    },
    {
        "name": "paymentInstrumentType",
        "baseName": "payment_instrument_type",
        "type": "any"
    },
    {
        "name": "originalAmountCents",
        "baseName": "original_amount_cents",
        "type": "number"
    },
    {
        "name": "originalAmount",
        "baseName": "original_amount",
        "type": "ClickFunnelOriginalAmount"
    },
    {
        "name": "originalAmountCurrency",
        "baseName": "original_amount_currency",
        "type": "string"
    },
    {
        "name": "manual",
        "baseName": "manual",
        "type": "boolean"
    },
    {
        "name": "errorMessage",
        "baseName": "error_message",
        "type": "any"
    },
    {
        "name": "nmiCustomerVaultId",
        "baseName": "nmi_customer_vault_id",
        "type": "any"
    }
];
//# sourceMappingURL=clickFunnelPurchase.js.map