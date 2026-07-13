export declare class WTTicketReachStats extends null<String, any> {
    'issuedCount': any | null;
    'issuedSeats': any | null;
    'viewedCount'?: any | null;
    'viewedSeats'?: any | null;
    'claimedCount': any | null;
    'claimedSeats': any | null;
    'redeemedCount': any | null;
    'redeemedSeats': any | null;
    'compCount': any | null;
    'compSeats': any | null;
    'paidCount': any | null;
    'paidSeats': any | null;
    'redeemedValue': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
