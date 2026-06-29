export declare class WTAuthenticationLoginResponse extends null<String, any> {
    'id': any | null;
    'createdAt': any | null;
    'updatedAt': any | null;
    'firstName': any | null;
    'lastName': any | null;
    'username': any | null;
    'email': any | null;
    'merchantID': any | null;
    'employeeID': any | null;
    'profilePictureURL': any | null;
    'jobTitle': any | null;
    'department': any | null;
    'merchantName': any | null;
    'merchantCurrencyAbbreviation'?: any | null;
    'merchantIndustry': any | null;
    'customDomain'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
