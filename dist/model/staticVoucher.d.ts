import { Status } from './status';
export declare class StaticVoucher {
    'id': string | null;
    'isActive': boolean;
    'campaignID': string;
    'memberID'?: string;
    'cellPhoneNumber'?: string;
    'offerAmountCents': number;
    'orderNumber': number;
    'transactionType': string | null;
    'registerID': string | number | null;
    'redeemedSource': string;
    'redeemedTransactionID': string;
    'redeemedAmount': number;
    'isRedeemed': boolean;
    'refundedTransactionID': string;
    'refundedAmount': number;
    'status': Status;
    'customerID'?: string;
    'authorizedAgainstCheckNumber': string;
    'authorizedAmount': number;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'authorizedAmountDecimal': string;
    'authorizedAmountString': string;
    'offerAmountCentsDecimal': string;
    'offerAmountCentsString': string;
    'redeemedAmountDecimal': string;
    'redeemedAmountString': string;
    'dateTimeRedeemed'?: Date | null;
    'dateTimeRefunded'?: Date | null;
    'dateTimeLastViewed'?: Date | null;
    'reasonInvalid'?: string;
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
