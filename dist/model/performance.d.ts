import { AmenityId } from './amenityId';
export declare class Performance extends null<String, any> {
    'title': any | null;
    'body': any | null;
    'startDateTime': Date;
    'price': any | null;
    'url': any | null;
    'orderNumber': any | null;
    'isSoldOut': any | null;
    'mediaURL'?: string;
    'paymentDesignID'?: string;
    'maxCompTickets'?: number;
    'ticketExpirationDateTime'?: Date;
    'redemptionInstructions'?: string;
    'id': AmenityId;
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
    static getAttributeTypeMap(): any;
}
