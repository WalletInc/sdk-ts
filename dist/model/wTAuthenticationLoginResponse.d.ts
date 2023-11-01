export declare class WTAuthenticationLoginResponse {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'firstName': string;
    'lastName': string;
    'username': string;
    'email': string;
    'merchantID': string;
    'employeeID': string;
    'profilePictureURL': string;
    'jobTitle': string;
    'department': string;
    'merchantName': string;
    'merchantCurrencyAbbreviation'?: string;
    'merchantIndustry': string;
    'customDomain'?: string;
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
