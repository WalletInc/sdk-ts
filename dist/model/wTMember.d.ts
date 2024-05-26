export declare class WTMember {
    'id': string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'mobileNumber': string;
    'firstName'?: string;
    'lastName'?: string;
    'membershipTierID': string;
    'email': string;
    'birthday': string;
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
