export declare class MSMemberHistory extends null<String, any> {
    'memberIdentifier': any | null;
    'firstName'?: any | null;
    'lastName'?: any | null;
    'membershipTierID': string;
    'mobileNumber': any | null;
    'email': any | null;
    'birthday': any | null;
    'pointsAccrued': any | null;
    'id': any | null;
    'memberID': string;
    'merchantID': string;
    'createdAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
