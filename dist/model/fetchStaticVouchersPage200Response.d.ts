import { WTStaticVoucher } from './wTStaticVoucher';
export declare class FetchStaticVouchersPage200Response {
    'data': Array<WTStaticVoucher>;
    'totalRows': number;
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
