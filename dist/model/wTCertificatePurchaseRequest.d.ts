export declare class WTCertificatePurchaseRequest extends null<String, any> {
    'buyerMemberID'?: any | null;
    'buyerPhoneNumber'?: any | null;
    'senderName'?: any | null;
    'recipientPhoneNumber'?: any | null;
    'recipientEmailAddress'?: any | null;
    'recipientMemberID'?: any | null;
    'giftMessage'?: any | null;
    'occasion'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
