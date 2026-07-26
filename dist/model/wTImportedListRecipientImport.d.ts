import { WTImportConsentBasis } from './wTImportConsentBasis';
export declare class WTImportedListRecipientImport extends null<String, any> {
    'fileName': any | null;
    'bucket': any | null;
    'consentBasis'?: WTImportConsentBasis;
    'consentAttested'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
