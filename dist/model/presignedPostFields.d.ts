export declare class PresignedPostFields extends null<String, string> {
    'policy': string;
    'xAmzSignature': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
