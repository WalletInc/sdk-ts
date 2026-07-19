import { WTSegmentAdvisoryRecommend } from './wTSegmentAdvisoryRecommend';
export declare class WTSegmentAdvisory extends null<String, any> {
    'recommend': WTSegmentAdvisoryRecommend;
    'perRecipientSaving': any | null;
    'campaignSaving': any | null;
    'costNeutral': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
