export declare class WTMembershipTier {
    'tierNumber': string;
    'tierName': string;
    'tierDiscount': number;
    'tierDesignID': string;
    'pointsDesignID': string;
    'id': string | null;
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
