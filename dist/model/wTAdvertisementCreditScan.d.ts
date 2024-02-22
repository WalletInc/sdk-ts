import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType';
import { Status } from './status';
import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class WTAdvertisementCreditScan {
    'id': WTWalletPageViewId;
    'transactionType': PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType;
    'registerID': PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID;
    'redeemedSource': string;
    'redeemedTransactionID': string;
    'redeemedAmount': number;
    'isRedeemed': boolean;
    'refundedTransactionID': string;
    'refundedAmount': number;
    'status': Status;
    'authorizedAgainstCheckNumber': string;
    'authorizedAmount': number;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'advertisementCreditID': string;
    'redeemedAmountDecimal': string;
    'redeemedAmountString': string;
    'authorizedAmountDecimal': string;
    'authorizedAmountString': string;
    'dateTimeRedeemed': Date | null;
    'dateTimeRefunded': Date | null;
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
