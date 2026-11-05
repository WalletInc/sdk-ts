import { WTPrivacyRequestChannel } from './wTPrivacyRequestChannel';
import { WTTCPAPrivacyRequestForMerchantMerchantID } from './wTTCPAPrivacyRequestForMerchantMerchantID';
export declare class WTTCPAPrivacyRequestForMerchant extends null<String, any> {
    'cellPhone': any | null;
    'receivedVia': WTPrivacyRequestChannel;
    'reference': any | null;
    'merchantID': WTTCPAPrivacyRequestForMerchantMerchantID;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
