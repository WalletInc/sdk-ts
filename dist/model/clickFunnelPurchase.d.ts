import { ClickFunnelContact } from './clickFunnelContact';
import { ClickFunnelOriginalAmount } from './clickFunnelOriginalAmount';
export declare class ClickFunnelPurchase extends null<String, any> {
    'id': number;
    'products': any | null;
    'memberId'?: any | null;
    'contact': ClickFunnelContact;
    'funnelId': number;
    'stripeCustomerToken': string;
    'createdAt': Date;
    'updatedAt': Date;
    'subscriptionId'?: any | null;
    'chargeId'?: any | null;
    'ctransreceipt'?: any | null;
    'status': string;
    'fulfillmentStatus'?: any | null;
    'fulfillmentId'?: any | null;
    'fulfillments': {
        [key: string]: any;
    };
    'paymentsCount'?: any | null;
    'infusionsoftCcid'?: any | null;
    'oapCustomerId'?: any | null;
    'paymentInstrumentType'?: any | null;
    'originalAmountCents': number;
    'originalAmount': ClickFunnelOriginalAmount;
    'originalAmountCurrency': string;
    'manual': boolean;
    'errorMessage'?: any | null;
    'nmiCustomerVaultId'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
