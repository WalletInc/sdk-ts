"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelProduct = void 0;
class ClickFunnelProduct {
    static getAttributeTypeMap() {
        return ClickFunnelProduct.attributeTypeMap;
    }
}
exports.ClickFunnelProduct = ClickFunnelProduct;
ClickFunnelProduct.discriminator = undefined;
ClickFunnelProduct.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "stripePlan",
        "baseName": "stripe_plan",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "ClickFunnelAmount"
    },
    {
        "name": "amountCurrency",
        "baseName": "amount_currency",
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
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "htmlBody",
        "baseName": "html_body",
        "type": "string"
    },
    {
        "name": "thankYouPageId",
        "baseName": "thank_you_page_id",
        "type": "number"
    },
    {
        "name": "stripeCancelAfterPayments",
        "baseName": "stripe_cancel_after_payments",
        "type": "any"
    },
    {
        "name": "bump",
        "baseName": "bump",
        "type": "boolean"
    },
    {
        "name": "cartProductId",
        "baseName": "cart_product_id",
        "type": "any"
    },
    {
        "name": "billingIntegration",
        "baseName": "billing_integration",
        "type": "string"
    },
    {
        "name": "infusionsoftProductId",
        "baseName": "infusionsoft_product_id",
        "type": "any"
    },
    {
        "name": "infusionsoftSubscriptionId",
        "baseName": "infusionsoft_subscription_id",
        "type": "any"
    },
    {
        "name": "ontraportProductId",
        "baseName": "ontraport_product_id",
        "type": "any"
    },
    {
        "name": "ontraportPaymentCount",
        "baseName": "ontraport_payment_count",
        "type": "any"
    },
    {
        "name": "ontraportPaymentType",
        "baseName": "ontraport_payment_type",
        "type": "any"
    },
    {
        "name": "ontraportUnit",
        "baseName": "ontraport_unit",
        "type": "any"
    },
    {
        "name": "ontraportGatewayId",
        "baseName": "ontraport_gateway_id",
        "type": "any"
    },
    {
        "name": "ontraportInvoiceId",
        "baseName": "ontraport_invoice_id",
        "type": "any"
    },
    {
        "name": "commissionable",
        "baseName": "commissionable",
        "type": "boolean"
    },
    {
        "name": "statementDescriptor",
        "baseName": "statement_descriptor",
        "type": "string"
    },
    {
        "name": "netsuiteId",
        "baseName": "netsuite_id",
        "type": "any"
    },
    {
        "name": "netsuiteTag",
        "baseName": "netsuite_tag",
        "type": "any"
    },
    {
        "name": "netsuiteClass",
        "baseName": "netsuite_class",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    }
];
//# sourceMappingURL=clickFunnelProduct.js.map