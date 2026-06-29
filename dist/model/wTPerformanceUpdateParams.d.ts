export declare class WTPerformanceUpdateParams extends null<String, any> {
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
