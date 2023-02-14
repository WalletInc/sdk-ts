export declare class WTEmployee {
    'firstName': string;
    'lastName': string;
    'email': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
    'employeeID': string;
    'jobTitle': string;
    'department': string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'username': string;
    'emailVerified': string;
    'profilePictureURL': string;
    'merchantID': string;
    'sessionToken': string;
    'failedLoginAttempts'?: number;
    'lastLoginDate'?: Date;
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
