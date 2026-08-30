import { WTPublicVanityPageMerchant } from './wTPublicVanityPageMerchant';
export declare class WTPublicVanityPage extends null<String, any> {
    'id'?: string;
    'merchantID'?: string;
    'vanityPageWalletPrefix'?: string;
    'companyLogoURL'?: string;
    'headerBackgroundColor'?: string;
    'mobileAppIconURL'?: string;
    'androidSHA256Fingerprint'?: any | null;
    'isCall'?: boolean;
    'isPromotions'?: boolean;
    'isNewsArticles'?: boolean;
    'isPerformances'?: boolean;
    'isRepresentatives'?: boolean;
    'isProducts'?: boolean;
    'isServices'?: boolean;
    'isRoomRates'?: boolean;
    'isAmenities'?: boolean;
    'isGaming'?: boolean;
    'isDining'?: boolean;
    'isLounges'?: boolean;
    'isLinkBook'?: boolean;
    'isImageGrid'?: boolean;
    'merchant'?: WTPublicVanityPageMerchant;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
