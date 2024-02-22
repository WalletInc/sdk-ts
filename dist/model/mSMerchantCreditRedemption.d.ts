import { MSMemberRedemptionTransactionType } from './mSMemberRedemptionTransactionType';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
export declare class MSMerchantCreditRedemption {
    'transactionID': string;
    'transactionType': MSMemberRedemptionTransactionType;
    'amount': number;
    'registerID'?: PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID;
    'terminalType': string;
    'id': string;
    'merchantCreditID': string;
    'merchantID': string;
    'createdAt': Date;
    'isActive': boolean;
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
