import { MSMemberRedemptionTransactionType } from './mSMemberRedemptionTransactionType';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
export declare class MSMembershipTierRedemption {
    'memberID': string;
    'transactionID': string;
    'transactionType': MSMemberRedemptionTransactionType;
    'amount': number;
    'registerID'?: PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID;
    'terminalType': string;
    'id': string;
    'tierID': string;
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
