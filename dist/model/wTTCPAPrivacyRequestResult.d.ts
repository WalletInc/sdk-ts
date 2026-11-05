import { WTTCPAFilter } from './wTTCPAFilter';
export declare class WTTCPAPrivacyRequestResult extends null<String, any> {
    'filter': WTTCPAFilter;
    'alreadySuppressed': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
