export declare class WTImageGridCreateParams {
    'title': string;
    'url': string;
    'mediaURL': string;
    'sequenceNumber': number;
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
