import { PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType } from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType';
export declare class PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId {
    'title': string;
    'valueType': PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType;
    'paymentDesignID': string;
    'maxUses': number;
    'discountValue': number;
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
