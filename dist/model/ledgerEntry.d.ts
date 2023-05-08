import { ApplicableTerminals } from './applicableTerminals';
export declare class LedgerEntry {
    'registerID': string;
    'registerType': ApplicableTerminals;
    'transactionID': string;
    'transactionType': string | null;
    'checkAmount': number;
    'transactionAmount': number;
    'checkBalance': number;
    'discountReceived': string;
    'paymentObjectPrefix': string;
    'paymentObjectID': string;
    'parentObjectPrefix': string;
    'parentObjectID': string | null;
    'metaValue': string;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'refundedLedgerEntryID'?: string;
    'transactionAmountDecimal': string;
    'transactionAmountString': string;
    'checkAmountDecimal': string;
    'checkAmountString': string;
    'checkBalanceDecimal': string;
    'checkBalanceString': string;
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
