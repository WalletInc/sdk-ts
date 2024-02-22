import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
import { VSDynamicVoucherStatus } from './vSDynamicVoucherStatus';
import { WTDynamicVoucherRedemptionTransactionType } from './wTDynamicVoucherRedemptionTransactionType';
import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class WTDynamicVoucherRedemption {
    'sessionKey': string;
    'redeemedAmount': number;
    'dynamicVoucherID': string;
    'redeemedSource': string;
    'redeemedTransactionID': string;
    'transactionType': WTDynamicVoucherRedemptionTransactionType;
    'registerID': PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID;
    'id': WTWalletPageViewId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'redeemedAt'?: Date | null;
    'refundedAt'?: Date | null;
    'refundedTransactionID': string;
    'refundedAmount': number;
    'status': VSDynamicVoucherStatus;
    'redeemedAmountDecimal': string;
    'redeemedAmountString': string;
    'discountReceived': string;
    'metaValue': string;
    'parentObjectID': string;
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
