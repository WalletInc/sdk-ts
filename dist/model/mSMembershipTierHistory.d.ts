export declare class MSMembershipTierHistory {
    'tierNumber': string;
    'tierName': string;
    'tierDiscount': number;
    'tierDesignID': string;
    'pointsDesignID': string;
    'id': string;
    'merchantID': string;
    'tierID': string;
    'createdAt': Date;
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
