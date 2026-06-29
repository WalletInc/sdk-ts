import { MSMemberRedemptionRegisterID } from './mSMemberRedemptionRegisterID';
import { MSMemberRedemptionTransactionType } from './mSMemberRedemptionTransactionType';
export declare class MSMembershipTierRedemption extends null<String, any> {
    'memberID': any | null;
    'transactionID': any | null;
    'transactionType': MSMemberRedemptionTransactionType;
    'amount': any | null;
    'registerID'?: MSMemberRedemptionRegisterID;
    'terminalType': any | null;
    'id': any | null;
    'tierID': any | null;
    'merchantID': string;
    'createdAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
