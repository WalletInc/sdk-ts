import { WTMembershipTierId } from './wTMembershipTierId';
export declare class WTMembershipTierWithMemberCount {
    'tierNumber': string;
    'tierName': string;
    'tierDiscount': number;
    'tierDesignID': string;
    'pointsDesignID': string;
    'id': WTMembershipTierId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'memberCount': number;
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
