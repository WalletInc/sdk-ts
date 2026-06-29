import { WTMembershipTierId } from './wTMembershipTierId';
export declare class WTMembershipTier extends null<String, any> {
    'tierNumber': any | null;
    'tierName': any | null;
    'tierDiscount': any | null;
    'tierDesignID': string;
    'pointsDesignID': string;
    'id': WTMembershipTierId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
