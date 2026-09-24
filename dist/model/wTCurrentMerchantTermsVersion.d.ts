import { MerchantTermsDocumentType } from './merchantTermsDocumentType';
export declare class WTCurrentMerchantTermsVersion extends null<String, any> {
    'documentType': MerchantTermsDocumentType;
    'versionId': any | null;
    'effectiveDate': any | null;
    'url': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
