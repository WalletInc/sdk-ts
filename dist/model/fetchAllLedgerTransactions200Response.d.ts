import { LedgerEntry } from './ledgerEntry';
export declare class FetchAllLedgerTransactions200Response {
    'entries': Array<LedgerEntry>;
    'pageCount': number;
    'totalRecords': number;
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
