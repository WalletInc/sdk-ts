import { PhoneNumberCapabilities } from './phoneNumberCapabilities';
export declare class WTLocalInstance {
    'capabilities': PhoneNumberCapabilities;
    'beta': boolean;
    'addressRequirements': string;
    'isoCountry': string;
    'postalCode': string;
    'region': string;
    'longitude': number;
    'latitude': number;
    'rateCenter': string;
    'locality': string;
    'lata': string;
    'phoneNumber': string;
    'friendlyName': string;
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
