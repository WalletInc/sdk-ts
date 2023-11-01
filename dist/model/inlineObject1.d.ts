export declare class InlineObject1 {
    'redemptionInstructions'?: string;
    'ticketExpirationDateTime': Date;
    'maxCompTickets': number;
    'paymentDesignID': string | null;
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
