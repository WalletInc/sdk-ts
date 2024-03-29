import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class StaticVoucherCampaignGroup {
    'name': string;
    'voucherType': number;
    'createdBySourceID': number;
    'employeeID': string;
    'id': WTWalletPageViewId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'isLoaded': boolean;
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
