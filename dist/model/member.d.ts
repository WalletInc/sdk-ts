export declare class Member {
    'id': string;
    'isActive': boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'firstName'?: string;
    'lastName'?: string;
    'membershipTierID': string;
    'mobileNumber': string;
    'pointsAccrued': number;
    'memberID': string;
    'membershipTierRedeemableID': string;
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
