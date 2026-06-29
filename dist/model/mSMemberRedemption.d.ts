import { MSMemberRedemptionRegisterID } from './mSMemberRedemptionRegisterID';
import { MSMemberRedemptionTransactionType } from './mSMemberRedemptionTransactionType';
export declare class MSMemberRedemption extends null<String, any> {
    'transactionID': any | null;
    'transactionType': MSMemberRedemptionTransactionType;
    'points': any | null;
    'registerID'?: MSMemberRedemptionRegisterID;
    'terminalType': any | null;
    'id': any | null;
    'memberID': string;
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
