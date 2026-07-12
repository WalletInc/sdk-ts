export declare class WTGiftCardPurchaseRequest extends null<String, any> {
    'valueCents': any | null;
    'recipientPhoneNumber'?: any | null;
    'recipientEmailAddress'?: any | null;
    'recipientMemberID'?: any | null;
    'pinNumber'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
