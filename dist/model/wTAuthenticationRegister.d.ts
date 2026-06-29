export declare class WTAuthenticationRegister extends null<String, any> {
    'firstName': any | null;
    'lastName': any | null;
    'email': any | null;
    'password': any | null;
    'hearAboutUs'?: any | null;
    'hearAboutUsDetails'?: any | null;
    'companyName': any | null;
    'merchantType': any | null;
    'streetAddress1': any | null;
    'streetAddress2': any | null;
    'city': any | null;
    'state': any | null;
    'zip': any | null;
    'country': any | null;
    'phoneNumber': any | null;
    'ein'?: any | null;
    'gaClientId'?: any | null;
    'gaMeasurementId'?: any | null;
    'recaptchaToken'?: any | null;
    'affiliateID'?: any | null;
    'firstPromoterTrackingID'?: any | null;
    'firstPromoterAffiliateID'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
