import { WTMemberUpdateAppliedReportStatus } from './wTMemberUpdateAppliedReportStatus';
export declare class WTMemberUpdateAppliedReport extends null<String, any> {
    'jobID': string;
    'status': WTMemberUpdateAppliedReportStatus;
    'error'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
