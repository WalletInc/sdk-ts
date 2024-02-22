import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
export declare class VirtualBusinessCard {
    'firstName': string;
    'lastName': string;
    'emailAddress': string;
    'designation': string;
    'phoneNumber': string;
    'introduction'?: string;
    'instagram'?: string;
    'facebook'?: string;
    'youTube'?: string;
    'twitter'?: string;
    'linkedIn'?: string;
    'whatsApp'?: string;
    'avatarURL'?: string;
    'id': SaveTicketSettingsRequestPaymentDesignID;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;
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
