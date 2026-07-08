import { WTLeadFiInquiryResult } from './wTLeadFiInquiryResult';
export declare class WTFinancingSoftPullResponse extends null<String, any> {
    'authorizationRecordID': any | null;
    'qualificationTier'?: any | null;
    'tier'?: any | null;
    'bureaus': any | null;
    'result'?: WTLeadFiInquiryResult;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
