export declare class WTImageGridCreateParams extends null<String, any> {
    'title': any | null;
    'url': string;
    'mediaURL': any | null;
    'sequenceNumber': number;
    'isPinned'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
