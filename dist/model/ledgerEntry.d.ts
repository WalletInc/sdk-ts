import { ApplicableTerminals } from './applicableTerminals';
import { LedgerEntryParentObjectID } from './ledgerEntryParentObjectID';
import { LedgerEntryTransactionType } from './ledgerEntryTransactionType';
import { StaticVoucherId } from './staticVoucherId';
export declare class LedgerEntry extends null<String, any> {
    'registerID': any | null;
    'registerType': ApplicableTerminals;
    'transactionID': any | null;
    'transactionType': LedgerEntryTransactionType;
    'checkAmount': any | null;
    'transactionAmount': any | null;
    'checkBalance': any | null;
    'discountReceived': any | null;
    'paymentObjectPrefix': any | null;
    'paymentObjectID': string;
    'parentObjectPrefix': any | null;
    'parentObjectID': LedgerEntryParentObjectID;
    'metaValue': any | null;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'refundedLedgerEntryID'?: string;
    'transactionAmountDecimal': any | null;
    'transactionAmountString': any | null;
    'checkAmountDecimal': any | null;
    'checkAmountString': any | null;
    'checkBalanceDecimal': any | null;
    'checkBalanceString': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
