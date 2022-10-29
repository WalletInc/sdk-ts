export declare class MSMemberHistory {
    'memberIdentifier': string;
    'firstName'?: string;
    'lastName'?: string;
    'membershipTierID': string;
    'mobileNumber': string;
    'pointsAccrued': number;
    'id': string;
    'memberID': string;
    'merchantID': string;
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
