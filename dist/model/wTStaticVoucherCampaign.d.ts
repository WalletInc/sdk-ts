import { PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType } from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType';
import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class WTStaticVoucherCampaign {
    'id': WTWalletPageViewId;
    'title': string;
    'notes': string;
    'valueType': PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType;
    'isLoaded': boolean;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'employeeID': string;
    'reinvestmentSum': number;
    'numberOfVouchersInFile': number;
    'campaignGroupID'?: string;
    'bucket'?: string;
    'createdBySourceID': number;
    'originalFileName'?: string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'voucherType': number;
    'reinvestmentSumDecimal': string;
    'reinvestmentSumString': string;
    'startDate': Date;
    'expirationDate': Date;
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
