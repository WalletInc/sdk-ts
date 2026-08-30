import { WTGuestDonationRequestType } from './wTGuestDonationRequestType';
export declare class WTGuestDonationRequest extends null<String, any> {
    'phoneVerificationToken': any | null;
    'merchantID': any | null;
    'amountCents': any | null;
    'message'?: any | null;
    'type'?: WTGuestDonationRequestType;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
