import { WTCertificateDealCreateRequestEntitlementType } from './wTCertificateDealCreateRequestEntitlementType';
import { WTCertificateEntitlementSnapshot } from './wTCertificateEntitlementSnapshot';
export declare class WTCertificateDealCreateRequest extends null<String, any> {
    'title': any | null;
    'description'?: any | null;
    'entitlementType': WTCertificateDealCreateRequestEntitlementType;
    'entitlementID': any | null;
    'entitlementQuantity'?: any | null;
    'entitlementSnapshot': WTCertificateEntitlementSnapshot;
    'retailValueCents': any | null;
    'salePriceCents': any | null;
    'quantityAvailable'?: any | null;
    'requiresGiftRedemption'?: any | null;
    'validFrom'?: any | null;
    'validThrough'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
