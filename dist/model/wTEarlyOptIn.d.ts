import { WTDisclosureBasis } from './wTDisclosureBasis';
import { WTEarlyOptInTier } from './wTEarlyOptInTier';
export declare class WTEarlyOptIn extends null<String, any> {
    'id': any | null;
    'mobileNumber': any | null;
    'joinedAt': any | null;
    'tier': WTEarlyOptInTier;
    'optInSource'?: any | null;
    'disclosureVersion'?: any | null;
    'disclosureBasis'?: WTDisclosureBasis;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
