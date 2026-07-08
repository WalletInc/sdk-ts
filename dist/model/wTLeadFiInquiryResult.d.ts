import { WTLeadFiConsumerProfile } from './wTLeadFiConsumerProfile';
import { WTLeadFiCreditOffer } from './wTLeadFiCreditOffer';
export declare class WTLeadFiInquiryResult extends null<String, any> {
    'code': any | null;
    'preQualification'?: any | null;
    'tier'?: any | null;
    'creditScore'?: any | null;
    'creditLimit': WTLeadFiCreditOffer;
    'creditPreApproval': WTLeadFiCreditOffer;
    'consumerProfile': WTLeadFiConsumerProfile;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
