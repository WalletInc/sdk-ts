import { WTPrivacyRequestChannel } from './wTPrivacyRequestChannel';
export declare class WTTCPAPrivacyRequest extends null<String, any> {
    'cellPhone': any | null;
    'receivedVia': WTPrivacyRequestChannel;
    'reference': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
