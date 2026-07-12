import { WTConnectOnboardingStatus } from './wTConnectOnboardingStatus';
import { WTConnectRequirements } from './wTConnectRequirements';
export declare class WTConnectAccountStatus extends null<String, any> {
    'accountId': any | null;
    'onboardingStatus': WTConnectOnboardingStatus;
    'detailsSubmitted': any | null;
    'chargesEnabled': any | null;
    'payoutsEnabled': any | null;
    'ecommerceEligible': any | null;
    'requirements': WTConnectRequirements;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
