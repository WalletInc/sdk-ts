import { WTTicket } from './wTTicket';
export declare class FetchPerformanceTicketsPage200Response {
    'data': Array<WTTicket>;
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
