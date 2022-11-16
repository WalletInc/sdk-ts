/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.523
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ClickFunnelAmount } from './clickFunnelAmount';

export class ClickFunnelProduct {
    'id': number;
    'name': string;
    'stripePlan': string;
    'amount': ClickFunnelAmount;
    'amountCurrency': string;
    'createdAt': Date;
    'updatedAt': Date;
    'subject': string;
    'htmlBody': string;
    'thankYouPageId': number;
    'stripeCancelAfterPayments'?: any | null;
    'bump': boolean;
    'cartProductId'?: any | null;
    'billingIntegration': string;
    'infusionsoftProductId'?: any | null;
    'infusionsoftSubscriptionId'?: any | null;
    'ontraportProductId'?: any | null;
    'ontraportPaymentCount'?: any | null;
    'ontraportPaymentType'?: any | null;
    'ontraportUnit'?: any | null;
    'ontraportGatewayId'?: any | null;
    'ontraportInvoiceId'?: any | null;
    'commissionable': boolean;
    'statementDescriptor': string;
    'netsuiteId'?: any | null;
    'netsuiteTag'?: any | null;
    'netsuiteClass'?: any | null;
    'description': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return ClickFunnelProduct.attributeTypeMap;
    }
}

