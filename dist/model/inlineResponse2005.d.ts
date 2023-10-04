import { OutboundSMS } from './outboundSMS';
export declare class InlineResponse2005 {
    'total': number;
    'length': number;
    'results': Array<OutboundSMS>;
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
