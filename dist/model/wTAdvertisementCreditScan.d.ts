import { Status } from './status';
export declare class WTAdvertisementCreditScan {
    'id': string | null;
    'isActive': boolean;
    'transactionType': string | null;
    'registerID': string | number | null;
    'redeemedSource': string;
    'redeemedTransactionID': string;
    'redeemedAmount': number;
    'isRedeemed': boolean;
    'refundedTransactionID': string;
    'refundedAmount': number;
    'status': Status;
    'authorizedAgainstCheckNumber': string;
    'authorizedAmount': number;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'advertisementCreditID': string;
    'redeemedAmountDecimal': string;
    'redeemedAmountString': string;
    'authorizedAmountDecimal': string;
    'authorizedAmountString': string;
    'dateTimeRedeemed': Date | null;
    'dateTimeRefunded': Date | null;
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
