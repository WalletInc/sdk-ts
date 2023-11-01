import { ClickFunnelAmount } from './clickFunnelAmount';
export declare class ClickFunnelProduct {
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
