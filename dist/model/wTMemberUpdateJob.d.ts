import { WTMemberUpdateJobStatus } from './wTMemberUpdateJobStatus';
import { WTMemberUpdateRevertResult } from './wTMemberUpdateRevertResult';
export declare class WTMemberUpdateJob extends null<String, any> {
    'id': any | null;
    'status': WTMemberUpdateJobStatus;
    'fileName': any | null;
    'createdAt': Date;
    'updatedAt': Date;
    'summary'?: any | null;
    'diffFileURL'?: string;
    'error'?: string;
    'revert'?: WTMemberUpdateRevertResult;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
