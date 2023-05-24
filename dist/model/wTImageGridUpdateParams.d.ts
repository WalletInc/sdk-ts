export declare class WTImageGridUpdateParams {
    'title': string;
    'url': string;
    'mediaURL': string;
    'sequenceNumber': number;
    'isPinned'?: boolean;
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
