import { WTTicketUpdateParams } from './wTTicketUpdateParams';
export declare class InlineObject2 {
    'tickets': Array<WTTicketUpdateParams>;
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
