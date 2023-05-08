import { WTWalletPageViewGeoPoint } from './wTWalletPageViewGeoPoint';
export declare class WTWalletPageView {
    'ip': string;
    'walletObjectID': string;
    'walletObjectPrefix': string;
    'parentObjectID': string;
    'parentObjectPrefix': string;
    'sessionID': string;
    'navigatorAgent': string;
    'browserName': string;
    'browserVersion': string;
    'engineName': string;
    'engineVersion': string;
    'oSName': string;
    'oSVersion': string;
    'isMobile': boolean;
    'deviceVendor': string;
    'deviceModel': string;
    'deviceType': string;
    'phoneVerificationToken': string;
    'id': string | null;
    'status': string;
    'country': string;
    'countryCode': string;
    'region': string;
    'regionName': string;
    'city': string;
    'zip': string;
    'latitude': number;
    'longitude': number;
    'timezone': string;
    'isp': string;
    'org': string;
    'asn': string;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
    'isActive': boolean;
    'geoPoint': WTWalletPageViewGeoPoint;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
