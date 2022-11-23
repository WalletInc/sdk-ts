export declare class OutboundSMS {
    'id': string | null;
    'employeeID': string;
    'status': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'body': string;
    'phoneNumberID': string;
    'mediaURLs': Array<string>;
    'paymentObjectBroadcastID'?: string | null;
    'bodyTemplate': string;
    'statusCallback': string;
    'isSent': boolean;
    'sentAt'?: Date;
    'deliveredAt'?: Date;
    'messageSid': string;
    'numSegments'?: number;
    'numMedia'?: number;
    'errorCode'?: string | null;
    'errorMessage'?: string | null;
    'to': string;
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
