import { AmenityId } from './amenityId';
export declare class Performance extends null<String, any> {
    'title': any | null;
    'body': any | null;
    'startDateTime': any | null;
    'price': any | null;
    'url': any | null;
    'orderNumber': any | null;
    'isSoldOut': any | null;
    'mediaURL'?: any | null;
    'paymentDesignID'?: string;
    'maxCompTickets'?: any | null;
    'ticketExpirationDateTime'?: any | null;
    'redemptionInstructions'?: any | null;
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'merchantID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
