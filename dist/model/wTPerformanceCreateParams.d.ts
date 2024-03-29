export declare class WTPerformanceCreateParams {
    'title': string;
    'body': string;
    'startDateTime': Date;
    'price': string;
    'url': string;
    'orderNumber': number;
    'isSoldOut': boolean;
    'mediaURL'?: string;
    'paymentDesignID'?: string;
    'maxCompTickets'?: number;
    'ticketExpirationDateTime'?: Date;
    'redemptionInstructions'?: string;
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
