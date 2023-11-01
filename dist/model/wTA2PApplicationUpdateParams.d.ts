import { BusinessClassification } from './businessClassification';
import { BusinessIndustry } from './businessIndustry';
import { BusinessRegionsOfOperation } from './businessRegionsOfOperation';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessStockExchanges } from './businessStockExchanges';
import { BusinessType } from './businessType';
import { JobPosition } from './jobPosition';
export declare class WTA2PApplicationUpdateParams {
    'businessName': string;
    'businessType': BusinessType;
    'businessClassification': BusinessClassification;
    'businessIndustry': BusinessIndustry;
    'taxIDType': BusinessRegistrationIdentifier;
    'taxID': string;
    'websiteURL': string;
    'socialMediaURL': string;
    'regionsOfOperation': Array<BusinessRegionsOfOperation>;
    'stockExchange'?: BusinessStockExchanges;
    'stockTicker'?: string;
    'messagingVolumeHigh': boolean;
    'address1': string;
    'address2'?: string;
    'city': string;
    'state': string;
    'postalCode': string;
    'country': string;
    'firstName': string;
    'lastName': string;
    'email': string;
    'jobTitle': string;
    'jobPosition': JobPosition;
    'phoneNumber': string;
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
