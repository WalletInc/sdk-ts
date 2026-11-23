import { WTPointsLedgerEntryType } from './wTPointsLedgerEntryType';
export declare class WTPointsLedgerEntry extends null<String, any> {
    'id': string;
    'entryType': WTPointsLedgerEntryType;
    'points': any | null;
    'source': string;
    'sourceLabel': any | null;
    'createdAt': Date;
    'employeeName': any | null;
    'reason': any | null;
    'eligibleAmountCents': any | null;
    'balanceAfter'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
