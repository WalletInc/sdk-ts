import { InboundSMS } from './inboundSMS';
export declare class InlineResponse2003 {
    'total': number;
    'length': number;
    'results': Array<InboundSMS>;
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
