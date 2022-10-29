export declare class WTAuthenticationRegister {
    'firstName': string;
    'lastName': string;
    'email': string;
    'password': string;
    'hearAboutUs': string;
    'hearAboutUsDetails': string;
    'companyName': string;
    'merchantType': string;
    'streetAddress1': string;
    'streetAddress2': string;
    'city': string;
    'state': string;
    'zip': string;
    'country': string;
    'phoneNumber': string;
    'ein'?: string;
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
