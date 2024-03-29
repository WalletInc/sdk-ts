import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class OptInListSource {
    'id': WTWalletPageViewId;
    'listID': string;
    'sourceName': string;
    'employeeID': string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
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
