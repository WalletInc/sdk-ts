import { StaticVoucherCampaignValueType } from './staticVoucherCampaignValueType';
export declare class CreateStaticVoucherCampaign extends null<String, any> {
    'startDateTime': any | null;
    'expirationDateTime': any | null;
    'title': any | null;
    'notes': any | null;
    'valueType': StaticVoucherCampaignValueType;
    'displayValue'?: any | null;
    'merchantsReferenceID'?: any | null;
    'validOnlyAtPOSRegisterIDs'?: any | null;
    'paymentDesignID': string;
    'bucket'?: any | null;
    'fileName'?: any | null;
    'sourceID': any | null;
    'campaignGroupID'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
