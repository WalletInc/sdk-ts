import { ClickFunnelContact } from './clickFunnelContact';
import { ClickFunnelOriginalAmount } from './clickFunnelOriginalAmount';
import { ClickFunnelProduct } from './clickFunnelProduct';
export declare class ClickFunnelPurchase {
    'id': number;
    'products': Array<ClickFunnelProduct>;
    'memberId'?: any | null;
    'contact': ClickFunnelContact;
    'funnelId': number;
    'stripeCustomerToken': string;
    'createdAt': Date;
    'updatedAt': Date;
    'subscriptionId': string;
    'chargeId'?: any | null;
    'ctransreceipt'?: any | null;
    'status': string;
    'fulfillmentStatus'?: any | null;
    'fulfillmentId'?: any | null;
    'fulfillments': object;
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
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
