export declare class WTMemberUpdatePreviewReport extends null<String, any> {
    'jobID': string;
    'summary'?: any | null;
    'diffFileKey'?: string;
    'error'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
