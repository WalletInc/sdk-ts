import { OutboundSMS } from './outboundSMS';
export declare class FetchOutboundSMSByPage200Response {
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
