import { WTMediaProcessedReportStatus } from './wTMediaProcessedReportStatus';
export declare class WTMediaProcessedReport extends null<String, any> {
    'originalKey': string;
    'status': WTMediaProcessedReportStatus;
    'fileURL'?: string;
    'fileType'?: string;
    'fileSize'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
