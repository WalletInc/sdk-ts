export declare class Performance {
    'title': string;
    'body': string;
    'startDateTime': Date;
    'price': number;
    'url': string;
    'orderNumber': number;
    'isSoldOut': boolean;
    'mediaURL'?: string;
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
