export declare class RoomRate {
    'title': string;
    'description': string;
    'displayedPrice'?: string;
    'orderNumber': number;
    'mediaURL'?: string;
    'additionalInfoURL'?: string;
    'id': string | null;
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
